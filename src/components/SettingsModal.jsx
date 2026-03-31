export default function SettingsModal({ isOpen, onClose, userPin, onUnpair, onLogout, isAdmin, onOpenAdmin }) {
    if (!isOpen) return null;

    return (
        <div className="overlay">
            <div className="modal-content small">
                <h2 style={{ marginTop: 0, color: 'white' }}>Settings</h2>
                
                <div style={{ flexGrow: 1 }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.5 }}>
                        Manage your connection and account.
                    </p>
                    
                    <div style={{ background: '#000', border: '1px solid #333', borderRadius: '8px', padding: '12px', marginBottom: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px', fontWeight: 'bold' }}>
                            Current Pairing ID
                        </div>
                        <div style={{ fontFamily: '"Roboto Mono", monospace', fontSize: '24px', color: 'var(--accent-blue)', fontWeight: 800, letterSpacing: '2px' }}>
                            {userPin || "------"}
                        </div>
                    </div>

                    {/* NEW: Re-routed Admin Button */}
                    {isAdmin && (
                        <button onClick={onOpenAdmin} className="btn-action btn-primary" style={{marginBottom: '16px'}}>
                            👑 OPEN ADMIN DASHBOARD
                        </button>
                    )}

                    <button onClick={onUnpair} className="unpair-btn" style={{marginTop: '0'}}>
                        UNPAIR SIMULATOR
                    </button>
                    
                    <button onClick={onLogout} className="btn-action btn-outline" style={{marginTop: '12px'}}>
                        LOG OUT
                    </button>
                </div>

                <button className="cancel-btn" style={{ marginTop: '24px' }} onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}