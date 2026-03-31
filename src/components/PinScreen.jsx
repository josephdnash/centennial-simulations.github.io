import { useState } from 'react';

export default function PinScreen({ onPinSubmit, connectionStatus, onCancel }) {
    const [pin, setPin] = useState('');
    const [error, setError] = useState('');

    const handleConnect = () => {
        setError('');
        const cleanPin = pin.toUpperCase().trim();
        if (cleanPin.length === 6) {
            onPinSubmit(cleanPin);
        } else {
            setError("Please enter a valid 6-character Pairing ID.");
        }
    };

    let buttonText = "CONNECT DASHBOARD";
    let isWaiting = false;

    if (connectionStatus === 'connecting') {
        buttonText = "WAKING UP CLOUD RELAY...";
        isWaiting = true;
    } else if (connectionStatus === 'authenticating') {
        buttonText = "VERIFYING PIN WITH SIMULATOR...";
        isWaiting = true;
    } else if (connectionStatus === 'disconnected') {
        buttonText = "CONNECTION FAILED - RETRYING...";
        isWaiting = true;
    }

    return (
        <div className="fullscreen-overlay">
            <div className="auth-box">
                <h1 style={{ marginTop: 0, fontSize: '28px', color: 'white' }}>Link Simulator</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                    Enter the 6-digit Pairing ID shown on the virtual panel inside MSFS.
                </p>

                {error && <div className="error-msg">{error}</div>}

                <input 
                    type="text" 
                    className="pin-input" 
                    maxLength="6" 
                    placeholder="A7X9BQ"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !isWaiting && handleConnect()}
                    disabled={isWaiting}
                    style={{ opacity: isWaiting ? 0.5 : 1 }}
                />

                <button 
                    onClick={handleConnect}
                    disabled={isWaiting}
                    style={{ 
                        animation: isWaiting ? 'pulse 1.5s infinite' : 'none',
                        opacity: isWaiting ? 0.8 : 1,
                        cursor: isWaiting ? 'not-allowed' : 'pointer'
                    }}
                >
                    {buttonText}
                </button>

                {isWaiting && (
                    <div 
                        style={{ color: 'var(--accent-red)', fontSize: '14px', marginTop: '20px', cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline' }}
                        onClick={onCancel}
                    >
                        Cancel Pairing
                    </div>
                )}
            </div>
            <style>{`@keyframes pulse { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }`}</style>
        </div>
    );
}