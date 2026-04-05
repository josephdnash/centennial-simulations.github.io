import { useState, useEffect, useRef, useCallback } from 'react';
import { DICTIONARY } from '../utils/dictionary';

export default function useMSFS(pin, pagesData) {
    const [simState, setSimState] = useState({});
    
    // 4 States: disconnected -> connecting -> authenticating -> connected
    const [connectionStatus, setConnectionStatus] = useState('disconnected');
    const ws = useRef(null);

    // Function to calculate and send required tracking vars
    const broadcastCustomVars = useCallback(() => {
        if (!ws.current || ws.current.readyState !== WebSocket.OPEN) return;
        
        let varsToTrack = [];
        let seen = new Set();

        for (let p = 0; p < 10; p++) {
            if (!pagesData[p]) continue;
            pagesData[p].forEach(cell => {
                if (cell && cell.id) {
                    const dictItem = DICTIONARY[cell.baseType || cell.id];
                    let cVar = cell.customVar || (dictItem ? dictItem.customVar : null);
                    let tVar = cell.trackingVar || (dictItem ? dictItem.trackingVar : null);

                    if (cVar && !seen.has(cVar)) {
                        seen.add(cVar);
                        varsToTrack.push({ name: cVar, unit: cell.customUnit || (dictItem?.customUnit || "number") });
                    }
                    if (tVar && !seen.has(tVar)) {
                        seen.add(tVar);
                        varsToTrack.push({ name: tVar, unit: "number" });
                    }
                }
            });
        }
        ws.current.send(JSON.stringify({ type: "SET_CUSTOM_VARS", vars: varsToTrack }));
    }, [pagesData]);

    // Manage the WebSocket Lifecycle
    useEffect(() => {
        if (!pin) return;

        const connect = () => {
            setConnectionStatus('connecting');
            ws.current = new WebSocket('wss://msfs-relay.onrender.com');

            ws.current.onopen = () => {
                // We reached the cloud! Now we send the PIN and wait for the sim.
                setConnectionStatus('authenticating');
                ws.current.send(JSON.stringify({ type: "join", pin: pin }));
                setTimeout(broadcastCustomVars, 1000);
            };

            ws.current.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    
                    // Let's spy on exactly what the server is sending us
                    console.log("📥 Received from Relay:", data);
                    
                    // 1. Strict Filter: Ignore errors, info, and ANY echoed commands we sent
                    if (
                        data.type === "error" || 
                        data.error || 
                        data.type === "info" || 
                        data.status || 
                        data.message ||
                        data.type === "join" ||
                        data.type === "SET_CUSTOM_VARS" ||
                        data.type === "SD_COMMAND"
                    ) {
                        if (data.type === "error" || data.error) {
                            console.warn("Relay Error:", data.error || data.message);
                            setConnectionStatus('disconnected'); // Kick them back to retry
                        }
                        return; // Stop here. Do not upgrade to 'connected'.
                    }

                    // 2. If it passed all those checks, it's real MSFS telemetry! Lock it in.
                    setConnectionStatus(prev => {
                        if (prev === 'authenticating') return 'connected';
                        return prev;
                    });
                    
                    // 3. Merge incoming telemetry with our existing state
                    setSimState(prevState => ({ ...prevState, ...data }));
                } catch (e) { 
                    console.error("Telemetry parse error", e); 
                }
            };

            ws.current.onclose = () => {
                setConnectionStatus('disconnected');
                setTimeout(connect, 3000); // Auto-reconnect loop
            };
        };

        connect();

        // Cleanup on unmount
        return () => {
            if (ws.current) {
                ws.current.onclose = null; 
                ws.current.close();
            }
        };
    }, [pin, broadcastCustomVars]);

    // If they drag a new item onto the grid, re-broadcast what to track
    useEffect(() => {
        if (connectionStatus === 'connected') {
            broadcastCustomVars();
        }
    }, [pagesData, connectionStatus, broadcastCustomVars]);

    // Send commands to MSFS
    const sendCommand = (cmd) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN && cmd) {
            ws.current.send(JSON.stringify({ type: "SD_COMMAND", command: cmd }));
        }
    };

    return { simState, connectionStatus, sendCommand };
}