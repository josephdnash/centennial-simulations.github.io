export default function TopBar({ 
    currentProfile, isEditMode, toggleMode, openSettings, openProfiles, 
    connectionStatus, breadcrumbText, currentPage, onGoHome 
}) {
    let statusText = "WAITING FOR CONNECTION...";
    let statusColor = "var(--text-muted)"; 
    let isPulsing = false;
    
    if (connectionStatus === 'connecting') {
        statusText = "WAKING UP CLOUD RELAY...";
        statusColor = "var(--accent-yellow)";
        isPulsing = true;
    } else if (connectionStatus === 'authenticating') {
        statusText = "WAITING FOR SIM DATA...";
        statusColor = "var(--accent-yellow)";
        isPulsing = true;
    } else if (connectionStatus === 'connected') {
        statusText = "DATA LINK ESTABLISHED";
        statusColor = "var(--accent-green)"; 
    } else if (connectionStatus === 'disconnected') {
        statusText = "CONNECTION LOST - RETRYING...";
        statusColor = "var(--accent-red)"; 
    }

    return (
        <div className="header">
            <div>
                {/* DYNAMIC BREADCRUMB */}
                <h1 
                    className="breadcrumb" 
                    onClick={() => currentPage > 0 && onGoHome()}
                    style={{ 
                        cursor: currentPage > 0 ? 'pointer' : 'default',
                        color: currentPage > 0 ? 'var(--accent-blue)' : 'var(--text-muted)'
                    }}
                    title={currentPage > 0 ? "Return to Home Page" : ""}
                >
                    {breadcrumbText || "HOME"}
                </h1>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div 
                        className="status-indicator" 
                        style={{ 
                            backgroundColor: statusColor, 
                            boxShadow: `0 0 10px ${statusColor}`,
                            animation: isPulsing ? 'pulse 1.5s infinite opacity' : 'none',
                            opacity: isPulsing ? 0.5 : 1
                        }}
                    ></div>
                    <span style={{ fontWeight: 'bold', color: statusColor }}>{statusText}</span>
                </div>
            </div>
            
            <div className="controls-row">
                <button className="mode-toggle profile-btn" onClick={openSettings}>⚙️ SETTINGS</button>
                <button className="mode-toggle profile-btn" onClick={openProfiles}>
                    🛩️ <span style={{ textTransform: 'uppercase' }}>{currentProfile}</span>
                </button>
                <button className={`mode-toggle ${isEditMode ? 'fly-btn' : 'edit-btn'}`} onClick={toggleMode}>
                    {isEditMode ? "🚀 GO TO FLY MODE" : "✏️ GO TO EDIT MODE"}
                </button>
            </div>
            <style>{`@keyframes pulse { 0% { opacity: 0.3; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.2); } 100% { opacity: 0.3; transform: scale(0.8); } }`}</style>
        </div>
    );
}