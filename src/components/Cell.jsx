import React from 'react';
import { DICTIONARY } from '../utils/dictionary';

export default function Cell({ index, cellData, isEditMode, onClick, onDelete, onDropCell, onNavigate, simState, sendCommand }) {
    
    const handleDragStart = (e) => {
        if (isEditMode) e.dataTransfer.setData('sourceIndex', index);
    };

    const handleDragOver = (e) => {
        if (isEditMode) e.preventDefault(); 
    };

    const handleDrop = (e) => {
        if (isEditMode) {
            e.preventDefault();
            const sourceIndex = parseInt(e.dataTransfer.getData('sourceIndex'));
            if (!isNaN(sourceIndex)) onDropCell(sourceIndex, index);
        }
    };

    // 1. Render empty slots
    if (!cellData || !cellData.id) {
        return (
            <div 
                className="grid-cell empty" 
                onClick={() => isEditMode && onClick(index)}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                {isEditMode && <div style={{ color: '#333', fontSize: '24px' }}>+</div>}
            </div>
        );
    }

    const dictItem = DICTIONARY[cellData.baseType || cellData.id];
    
    // 2. Render "Ghost" slots 
    if (!dictItem) {
        return (
            <div 
                className="grid-cell filled" 
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                style={{ border: '2px dashed var(--accent-red)', justifyContent: 'center' }}
            >
                {isEditMode && (
                    <button className="delete-cell-btn" onClick={(e) => { e.stopPropagation(); onDelete(index); }}>✕</button>
                )}
                {isEditMode && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ color: 'var(--accent-red)', fontSize: '16px', marginBottom: '4px' }}>⚠️</span>
                        <span style={{ color: 'var(--accent-red)', fontSize: '10px', fontWeight: 'bold', textAlign: 'center' }}>GHOST<br/>CELL</span>
                    </div>
                )}
            </div>
        );
    }

    const displayName = cellData.label || dictItem.name;
    const isGauge = dictItem.type === 'gauge';
    const isRotary = dictItem.type === 'rotary';
    const isButtonOrToggle = dictItem.type === 'button' || dictItem.type === 'smart_toggle';

    // TELEMETRY LOGIC (Bulletproof Lookup)
    let displayValue = "---";
    if (!isEditMode && (isGauge || isRotary)) {
        // Prioritize custom vars, fallback to dictionary default
        const dataKey = cellData.customVar || dictItem.dataKey;
        
        if (dataKey) {
            // Check exact match first, then fallback to lowercase match
            const rawValue = simState[dataKey] !== undefined ? simState[dataKey] : simState[dataKey.toLowerCase()];
            
            if (rawValue !== undefined && rawValue !== null) {
                displayValue = dictItem.decimals !== undefined ? Number(rawValue).toFixed(dictItem.decimals) : Math.round(rawValue);
            }
        }
    }

    // STATE LOGIC (Bulletproof Lookup)
    let isActive = false;
    if (!isEditMode && isButtonOrToggle) {
        // Prioritize custom vars and tracking vars, fallback to dictionary default
        const stateKey = cellData.customVar || cellData.trackingVar || dictItem.trackingVar || dictItem.stateKey;
        
        if (stateKey) {
            // Check exact match first, then fallback to lowercase match
            const rawState = simState[stateKey] !== undefined ? simState[stateKey] : simState[stateKey.toLowerCase()];
            
            if (rawState !== undefined) {
                isActive = rawState >= 1 || rawState === true;
            }
        }
    }

    const handleActionClick = (e) => {
        if (isEditMode) {
            onClick(index);
            return;
        }
        
        if (e && e.stopPropagation) e.stopPropagation();

        const isFolder = cellData.id?.includes('folder') || cellData.baseType?.includes('folder') || dictItem.type === 'folder';
        if (isFolder && cellData.targetPage !== undefined) {
            onNavigate(cellData.targetPage);
            return;
        }

        const isHome = cellData.id?.includes('nav_home') || cellData.baseType?.includes('nav_home');
        const isBack = cellData.id?.includes('nav_back') || cellData.baseType?.includes('nav_back');
            
        if (isHome) { onNavigate(0); return; }
        if (isBack) { onNavigate(cellData.targetPage !== undefined ? cellData.targetPage : 0); return; }
        
        if (cellData.baseType === "smart_toggle" || dictItem.type === "smart_toggle") {
            let onC = cellData.onCmd || dictItem.onCmd;
            let offC = cellData.offCmd || dictItem.offCmd;
            sendCommand(isActive ? offC : onC);
        } else if (cellData.id === "custom_button" || cellData.baseType === "custom_button") {
            sendCommand(cellData.customCmd);
        } else if (dictItem.type === 'button') {
            sendCommand(dictItem.command);
        }
    };

    return (
        <div 
            className={`grid-cell filled type-${dictItem.type} ${isActive ? 'active' : ''}`} 
            onClick={handleActionClick}
            draggable={isEditMode}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            style={{ 
                borderTop: isGauge ? '4px solid var(--accent-blue)' : (isRotary ? '4px solid var(--accent-yellow)' : ''),
                justifyContent: (isGauge || isRotary) ? 'space-evenly' : 'center'
            }}
        >
            {isEditMode && (
                <button className="delete-cell-btn" onClick={(e) => { e.stopPropagation(); onDelete(index); }}>✕</button>
            )}

            {(!isGauge && !isRotary || isEditMode) && (
                <div className="cell-icon">{dictItem.icon}</div>
            )}
            
            <div className="cell-title">{displayName}</div>

            {isGauge && !isEditMode && (
                <div className="cell-value">
                    {displayValue} {cellData.customDisplayUnit || dictItem.unit || ''}
                </div>
            )}

            {isRotary && !isEditMode && (
                <div className="rotary-container">
                    <button className="rotary-btn" onClick={(e) => { e.stopPropagation(); sendCommand(dictItem.cmdDec); }}>-</button>
                    <div className="cell-value" style={{ fontSize: '16px', color: 'var(--accent-yellow)' }}>
                        {displayValue} {dictItem.unit || ''}
                    </div>
                    <button className="rotary-btn" onClick={(e) => { e.stopPropagation(); sendCommand(dictItem.cmdInc); }}>+</button>
                </div>
            )}
        </div>
    );
}