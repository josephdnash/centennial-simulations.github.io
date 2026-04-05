import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // This lifecycle method catches the error and updates state to show the fallback UI
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // This lifecycle method is great for logging the error details
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught a critical error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.container}>
          <div style={styles.box}>
            <h2 style={styles.heading}>⚠️ SYSTEM MALFUNCTION</h2>
            <p style={styles.text}>A critical error occurred in this module.</p>
            
            <details style={styles.details}>
              <summary style={styles.summary}>View Error Logs</summary>
              <pre style={styles.pre}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </pre>
            </details>

            <button 
              className="btn-action" 
              style={styles.button} 
              onClick={() => window.location.reload()}
            >
              REBOOT SYSTEM
            </button>
          </div>
        </div>
      );
    }

    // If there is no error, just render the app normally
    return this.props.children; 
  }
}

// --- STYLES ---
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: '24px',
    boxSizing: 'border-box'
  },
  box: {
    backgroundColor: 'var(--bg-panel, #18181b)',
    padding: '32px',
    borderRadius: '12px',
    border: '2px solid var(--accent-red, #ef4444)',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 10px 30px rgba(239, 68, 68, 0.2)'
  },
  heading: {
    color: 'var(--accent-red, #ef4444)',
    margin: '0 0 16px 0',
    fontSize: '24px',
    letterSpacing: '1px'
  },
  text: {
    color: 'var(--text-main, #fff)',
    marginBottom: '24px'
  },
  details: {
    backgroundColor: 'var(--bg-base, #000)',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid var(--border-panel, #333)',
    marginBottom: '24px',
  },
  summary: {
    color: 'var(--text-muted, #aaa)',
    cursor: 'pointer',
    fontWeight: 'bold',
    outline: 'none'
  },
  pre: {
    marginTop: '12px',
    whiteSpace: 'pre-wrap',
    fontSize: '12px',
    color: 'var(--accent-red, #ef4444)',
    overflowX: 'auto',
    fontFamily: 'monospace',
    userSelect: 'text', 
    WebkitUserSelect: 'text'
  },
  button: {
    backgroundColor: 'var(--accent-red, #ef4444)',
    color: 'white',
    width: '100%',
    margin: 0
  }
};

export default ErrorBoundary;