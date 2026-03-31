export default function ProfileModal({ 
    isOpen, onClose, currentProfile, availableProfiles, 
    onSelectProfile, onCreateNew, onDuplicate, onRename, onDelete, onShare, onImport 
}) {
    if (!isOpen) return null;

    return (
        <div className="overlay">
            <div className="modal-content small" style={{ height: '85vh', maxHeight: '700px' }}>
                <h2 style={{ marginTop: 0, color: 'white', borderBottom: '1px solid #27272a', paddingBottom: '12px' }}>
                    Profiles
                </h2>
                
                <div style={{ flexGrow: 1, overflowY: 'auto', paddingRight: '4px', display: 'flex', flexDirection: 'column' }}>
                    {Object.keys(availableProfiles).length === 0 && (
                        <div style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '20px' }}>Loading profiles...</div>
                    )}
                    
                    {Object.entries(availableProfiles).map(([profName, meta]) => (
                        <div 
                            key={profName}
                            className={`profile-item ${profName === currentProfile ? 'active' : ''}`}
                            onClick={() => onSelectProfile(profName)}
                        >
                            <div className="profile-title">
                                <span>🛩️ {profName}</span>
                                {profName === currentProfile && <span style={{ fontSize: '10px', background: '#000', padding: '4px 8px', borderRadius: '4px', color: 'inherit' }}>ACTIVE</span>}
                            </div>
                            <div className="profile-tag">
                                For: {meta.aircraftTag || "Global"}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '16px', borderTop: '1px solid #27272a', paddingTop: '16px' }}>
                    <button onClick={onCreateNew} className="btn-action btn-outline">➕ New</button>
                    <button onClick={onImport} className="btn-action btn-outline">📥 Import</button>
                    <button onClick={onDuplicate} className="btn-action btn-outline">📄 Clone</button>
                    <button onClick={onShare} className="btn-action btn-outline">📤 Share</button>
                    <button onClick={onRename} className="btn-action btn-outline">✏️ Rename</button>
                    <button onClick={onDelete} className="btn-action btn-outline" style={{color: 'var(--accent-red)', borderColor: 'var(--border-panel)'}}>🗑️ Delete</button>
                </div>
                
                <button onClick={onClose} className="cancel-btn" style={{ marginTop: '16px' }}>Close</button>
            </div>
        </div>
    );
}