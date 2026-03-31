import { useState } from 'react';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function AuthScreen() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleAuthAction = async () => { /* Same logic as before */ };
    const handleGoogleSignIn = async () => { /* Same logic as before */ };
    const handleResetPassword = async () => { /* Same logic as before */ };

    return (
        <div className="fullscreen-overlay">
            <div className="auth-box">
                <h1 style={{ marginTop: 0, fontSize: '28px', color: 'white' }}>{isSignUp ? 'Create Account' : 'Log In'}</h1>
                <p style={{ color: '#a1a1aa', marginBottom: '24px' }}>Sign in to access your saved layouts.</p>

                {error && <div className="error-msg">{error}</div>}

                <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                
                <button onClick={handleAuthAction}>{isSignUp ? 'SIGN UP' : 'LOG IN'}</button>
                
                <div className="auth-toggle" onClick={() => setIsSignUp(!isSignUp)}>
                    {isSignUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
                </div>
                
                {!isSignUp && <div className="auth-forgot" onClick={handleResetPassword}>Forgot Password?</div>}

                <div className="auth-divider"><hr /><span>OR</span><hr /></div>

                <button className="google-btn" onClick={handleGoogleSignIn}>Sign in with Google</button>
            </div>
        </div>
    );
}