import { useState } from 'react';
import { DICTIONARY } from '../utils/dictionary';

export default function ComponentModal({ isOpen, onClose, onSelect, customComponents = {}, onDeleteCustom }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    if (!isOpen) return null;

    // 1. Build the Categories list dynamically
    const hasCustoms = Object.keys(customComponents).length > 0;
    const dictCategories = Array.from(new Set(Object.values(DICTIONARY).map(item => item.category)));
    const categories = ['All', ...(hasCustoms ? ['⭐ Custom Library'] : []), ...dictCategories];

    // 2. Filter the dictionary items
    const filteredDictKeys = Object.keys(DICTIONARY).filter(key => {
        const item = DICTIONARY[key];
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    // 3. Filter the Custom Components
    const filteredCustomKeys = Object.keys(customComponents).filter(key => {
        const item = customComponents[key];
        const matchesSearch = item.label?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || activeCategory === '⭐ Custom Library';
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="overlay">
            <div className="modal-content">
                {/* SIDEBAR */}
                <div className="modal-sidebar">
                    <h2 style={{ color: 'white', marginTop: 0, marginBottom: '24px' }}>Library</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
                        {categories.map(cat => (
                            <button 
                                key={cat} 
                                className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                                style={cat === '⭐ Custom Library' ? { color: 'var(--accent-purple)' } : {}}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <button className="cancel-btn" onClick={onClose}>Cancel</button>
                </div>

                {/* MAIN AREA */}
                <div className="modal-main">
                    <input 
                        type="text" 
                        id="modal-search" 
                        placeholder="Search for a gauge, button, or switch..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    
                    <div className="component-list">
                        {/* Render Custom Components First */}
                        {(activeCategory === 'All' || activeCategory === '⭐ Custom Library') && filteredCustomKeys.map(key => {
                            const customData = customComponents[key];
                            const dictItem = DICTIONARY[customData.baseType || customData.id] || {};
                            return (
                                <div 
                                    key={key} 
                                    className="component-item" 
                                    style={{ borderLeft: '4px solid var(--accent-purple)' }}
                                    onClick={() => onSelect(key, dictItem, true, customData)}
                                >
                                    <span style={{ fontSize: '24px' }}>{dictItem.icon || '📦'}</span>
                                    <span>{customData.label}</span>
                                    
                                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span className="component-tag" style={{ color: 'var(--accent-purple)', margin: 0 }}>CUSTOM</span>
                                        <button 
                                            className="component-delete-btn"
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevents adding to the grid!
                                                onDeleteCustom(key);
                                            }}
                                            title="Delete from Library"
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Render Standard Dictionary Items */}
                        {activeCategory !== '⭐ Custom Library' && filteredDictKeys.map(key => {
                            const item = DICTIONARY[key];
                            return (
                                <div key={key} className="component-item" onClick={() => onSelect(key, item, false, null)}>
                                    <span style={{ fontSize: '24px' }}>{item.icon}</span>
                                    <span>{item.name}</span>
                                    <span className="component-tag">{item.type.toUpperCase()}</span>
                                </div>
                            );
                        })}
                        
                        {filteredDictKeys.length === 0 && filteredCustomKeys.length === 0 && (
                            <div style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '40px' }}>
                                No components found.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}