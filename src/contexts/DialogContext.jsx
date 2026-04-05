import React, { createContext, useContext, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

// 1. Create the Context
const DialogContext = createContext();

// 2. Export the custom hook for components to use
export const useDialog = () => useContext(DialogContext);

// 3. Create the Provider
export const DialogProvider = ({ children }) => {
    const [dialog, setDialog] = useState({ isOpen: false, type: null, config: {}, resolve: null });
    const [inputValue, setInputValue] = useState("");

    // --- PROMISE GENERATORS ---
    const confirm = useCallback(({ title, message, confirmText = 'Yes', cancelText = 'Cancel' }) => {
        return new Promise((resolve) => {
            setDialog({
                isOpen: true,
                type: 'confirm',
                config: { title, message, confirmText, cancelText },
                resolve, 
            });
        });
    }, []);

    const prompt = useCallback(({ title, message, defaultValue = "", placeholder = "", confirmText = 'Save', cancelText = 'Cancel' }) => {
        setInputValue(defaultValue);
        return new Promise((resolve) => {
            setDialog({
                isOpen: true,
                type: 'prompt',
                config: { title, message, placeholder, confirmText, cancelText },
                resolve,
            });
        });
    }, []);

    // --- RESOLUTION HANDLER ---
    const handleClose = (result) => {
        if (dialog.resolve) dialog.resolve(result); 
        setDialog({ isOpen: false, type: null, config: {}, resolve: null }); 
        setInputValue("");
    };

    return (
        <DialogContext.Provider value={{ confirm, prompt }}>
            {children}
            
            {/* --- MODAL UI OVERLAY (PORTAL) --- */}
            {dialog.isOpen && createPortal(
                <div className="dialog-overlay" style={overlayStyle}>
                    <div className="dialog-box" style={boxStyle}>
                        <h3 style={{ margin: '0 0 10px 0' }}>{dialog.config.title}</h3>
                        {dialog.config.message && <p style={{ marginBottom: '15px' }}>{dialog.config.message}</p>}
                        
                        {dialog.type === 'prompt' && (
                            <input 
                                type="text" 
                                value={inputValue} 
                                onChange={(e) => setInputValue(e.target.value)} 
                                placeholder={dialog.config.placeholder}
                                autoFocus
                                style={inputStyle}
                                onKeyDown={(e) => e.key === 'Enter' && handleClose(inputValue)}
                            />
                        )}
                        
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
                            {dialog.config.cancelText && (
                                <button 
                                    className="btn-action btn-outline" 
                                    onClick={() => handleClose(dialog.type === 'prompt' ? null : false)}
                                    style={{ width: 'auto', marginTop: 0 }}
                                >
                                    {dialog.config.cancelText}
                                </button>
                            )}
                            <button 
                                className="btn-action btn-primary" 
                                onClick={() => handleClose(dialog.type === 'prompt' ? inputValue : true)}
                                style={{ width: 'auto', marginTop: 0 }}
                            >
                                {dialog.config.confirmText}
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </DialogContext.Provider>
    );
};

// --- STYLES ---
const overlayStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)', 
    zIndex: 99999, // Forces the modal above absolutely everything
    display: 'flex', justifyContent: 'center', alignItems: 'center'
};

const boxStyle = {
    // Hooks into your theme's panel background, falls back to dark grey
    backgroundColor: 'var(--bg-panel, #2a2a2a)', 
    // Hooks into your theme's text color
    color: 'var(--text-main, white)', 
    // Hooks into your theme's border color (transparent fallback for modern)
    border: '2px solid var(--border-panel, transparent)', 
    padding: '24px',
    borderRadius: '8px', 
    minWidth: '320px', 
    maxWidth: '400px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
    // 'inherit' forces it to use Roboto Mono in Retro, and Inter in Modern
    fontFamily: 'inherit' 
};

const inputStyle = {
    width: '100%', padding: '10px', boxSizing: 'border-box',
    borderRadius: '4px', 
    border: '1px solid var(--border-panel, #555)',
    backgroundColor: 'var(--bg-base, #1a1a1a)', 
    color: 'var(--text-main, white)', 
    fontSize: '16px',
    outline: 'none',
    fontFamily: 'inherit'
};