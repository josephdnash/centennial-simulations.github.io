import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DialogProvider } from './contexts/DialogContext';
import ErrorBoundary from './components/ErrorBoundary'; // <-- 1. Import it

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>  {/* <-- 2. Wrap the entire application */}
      <DialogProvider>  
        <App />
      </DialogProvider>
    </ErrorBoundary>
  </StrictMode>,
)