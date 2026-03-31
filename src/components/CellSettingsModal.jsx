import { useState, useEffect } from 'react';
import { DICTIONARY } from '../utils/dictionary';

export default function CellSettingsModal({ isOpen, onClose, cellData, onSave, onSaveToLibrary }) {
    // Standard States
    const [label, setLabel] = useState('');
    const [customVar, setCustomVar] = useState('');
    const [trackingVar, setTrackingVar] = useState('');
    const [customCmd, setCustomCmd] = useState('');
    
    // NEW: Smart Toggle States
    const [onCmd, setOnCmd] = useState('');
    const [offCmd, setOffCmd] = useState('');
    
    // NEW: Custom Gauge States
    const [customUnit, setCustomUnit] = useState('');
    const [customDisplayUnit, setCustomDisplayUnit] = useState('');

    useEffect(() => {
        if (isOpen && cellData) {
            setLabel(cellData.label || '');
            setCustomVar(cellData.customVar || '');
            setTrackingVar(cellData.trackingVar || '');
            setCustomCmd(cellData.customCmd || '');
            setOnCmd(cellData.onCmd || '');
            setOffCmd(cellData.offCmd || '');
            setCustomUnit(cellData.customUnit || '');
            setCustomDisplayUnit(cellData.customDisplayUnit || '');
        }
    }, [isOpen, cellData]);

    if (!isOpen || !cellData) return null;

    const dictItem = DICTIONARY[cellData.baseType || cellData.id] || {};
    const isFolder = cellData.id?.includes('folder') || cellData.baseType?.includes('folder');

    const getCurrentConfig = () => ({
        ...cellData,
        label: label.toUpperCase(),
        customVar: customVar.trim(),
        trackingVar: trackingVar.trim(),
        customCmd: customCmd.trim(),
        onCmd: onCmd.trim(),
        offCmd: offCmd.trim(),
        customUnit: customUnit.trim().toLowerCase(),
        customDisplayUnit: customDisplayUnit
    });

    const handleSave = () => onSave(getCurrentConfig());
    const handleSaveToLibrary = () => onSaveToLibrary(getCurrentConfig());

    // Clean reusable inline styles
    const inputStyle = { width: '100%', padding: '12px', background: '#000', border: '1px solid var(--border-panel)', color: 'white', borderRadius: '8px', boxSizing: 'border-box', fontFamily: 'Inter, sans-serif', outline: 'none' };
    const labelStyle = { display: 'block', color: 'white', fontWeight: 'bold', fontSize: '14px', marginBottom: '4px' };
    const subLabelStyle = { display: 'block', color: 'var(--text-muted)', fontSize: '11px', marginBottom: '8px' };

    return (
        <div className="overlay">
            <div className="modal-content small">
                <h2 style={{ marginTop: 0, color: 'white', borderBottom: '1px solid #27272a', paddingBottom: '12px' }}>
                    Edit Component
                </h2>
                
                <div style={{ flexGrow: 1, overflowY: 'auto', paddingRight: '4px' }}>
                    <div style={{ marginBottom: '16px', color: 'var(--accent-blue)', fontWeight: 'bold', fontSize: '14px' }}>
                        Base Type: {dictItem.name || "Unknown"}
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={labelStyle}>Display Name</label>
                        <input style={inputStyle} value={label} onChange={(e) => setLabel(e.target.value)} placeholder="e.g. LIGHTS" maxLength="12" />
                    </div>

                    {!isFolder && (
                        <>
                            <div style={{ marginBottom: '16px' }}>
                                <label style={labelStyle}>Custom Telemetry Variable (Optional)</label>
                                <div style={subLabelStyle}>Overrides default data source (e.g. A:INDICATED ALTITUDE, feet)</div>
                                <input style={inputStyle} value={customVar} onChange={(e) => setCustomVar(e.target.value)} placeholder="A:..., L:..." />
                            </div>

                            {/* GAUGE SPECIFIC FIELDS */}
                            {dictItem.type === 'gauge' && (
                                <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={labelStyle}>SimVar Unit</label>
                                        <input style={inputStyle} value={customUnit} onChange={e => setCustomUnit(e.target.value)} placeholder="e.g. celsius" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <label style={labelStyle}>Display Text</label>
                                        <input style={inputStyle} value={customDisplayUnit} onChange={e => setCustomDisplayUnit(e.target.value)} placeholder="e.g. °C" />
                                    </div>
                                </div>
                            )}

                            {/* TRACKING VAR FOR TOGGLES & BUTTONS */}
                            {(dictItem.type === 'button' || dictItem.type === 'smart_toggle') && (
                                <div style={{ marginBottom: '16px' }}>
                                    <label style={labelStyle}>Custom State Tracking Var (Optional)</label>
                                    <div style={subLabelStyle}>Determines if button glows green (e.g. L:GEAR_HANDLE_POSITION)</div>
                                    <input style={inputStyle} value={trackingVar} onChange={(e) => setTrackingVar(e.target.value)} placeholder="A:..., L:..." />
                                </div>
                            )}

                            {/* COMMAND FIELDS: SMART TOGGLE VS STANDARD BUTTON */}
                            {dictItem.type === 'smart_toggle' ? (
                                <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={labelStyle}>ON Command</label>
                                        <input style={inputStyle} value={onCmd} onChange={e => setOnCmd(e.target.value)} placeholder="e.g. 1 (>L:Var)" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <label style={labelStyle}>OFF Command</label>
                                        <input style={inputStyle} value={offCmd} onChange={e => setOffCmd(e.target.value)} placeholder="e.g. 0 (>L:Var)" />
                                    </div>
                                </div>
                            ) : (
                                <div style={{ marginBottom: '16px' }}>
                                    <label style={labelStyle}>Custom Command (Optional)</label>
                                    <div style={subLabelStyle}>Fires this specific command when clicked.</div>
                                    <input style={inputStyle} value={customCmd} onChange={(e) => setCustomCmd(e.target.value)} placeholder="e.g. TOGGLE_TAXI_LIGHTS" />
                                </div>
                            )}

                            <button onClick={handleSaveToLibrary} className="btn-action btn-outline" style={{ marginTop: '8px', borderColor: 'var(--accent-purple)', color: 'var(--accent-purple)' }}>
                                💾 Save as Reusable Component
                            </button>
                        </>
                    )}
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                    <button onClick={onClose} className="cancel-btn" style={{ marginTop: 0, flex: 1, padding: '12px' }}>Cancel</button>
                    <button onClick={handleSave} className="btn-action btn-secondary" style={{ marginTop: 0, flex: 1, padding: '12px' }}>Save to Grid</button>
                </div>
            </div>
        </div>
    );
}