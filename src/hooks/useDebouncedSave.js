import { useRef, useEffect, useCallback } from 'react';

export default function useDebouncedSave(saveFunction, delay) {
    const timeoutRef = useRef(null);
    const latestArgsRef = useRef(null);

    // 1. The debounced function we will actually call
    const debouncedFunction = useCallback((...args) => {
        // Always store the most recent arguments
        latestArgsRef.current = args;

        // Clear any existing timer
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Set a new timer
        timeoutRef.current = setTimeout(() => {
            saveFunction(...latestArgsRef.current);
            timeoutRef.current = null;
            latestArgsRef.current = null;
        }, delay);
    }, [saveFunction, delay]);

    // 2. The Flush mechanism (forces immediate execution of pending saves)
    const flush = useCallback(() => {
        if (timeoutRef.current && latestArgsRef.current) {
            clearTimeout(timeoutRef.current);
            saveFunction(...latestArgsRef.current);
            
            // Reset refs after forced save
            timeoutRef.current = null;
            latestArgsRef.current = null;
        }
    }, [saveFunction]);

    // 3. Edge Case Safety: Flush on component unmount
    useEffect(() => {
        return () => {
            flush();
        };
    }, [flush]);

    // 4. Edge Case Safety: Flush if the user closes the browser tab
    useEffect(() => {
        const handleBeforeUnload = () => flush();
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [flush]);

    return debouncedFunction;
}