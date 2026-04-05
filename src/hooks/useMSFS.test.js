import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useMSFS from './useMSFS';

// 1. --- MOCKING THE WEBSOCKET ---
// We hijack the browser's native WebSocket and replace it with our own dummy class.
class MockWebSocket {
    constructor(url) {
        this.url = url;
        this.readyState = 1; // Pretend it's already OPEN
        global.currentMockWs = this; // Save it globally so our tests can trigger it
    }
    send = vi.fn(); // vi.fn() creates a "spy" that records what was sent
    close = vi.fn();
}

// Override the global window WebSocket with our fake one
global.WebSocket = MockWebSocket;

// 2. --- THE TEST SUITE ---
describe('useMSFS Hook', () => {
    
    beforeEach(() => {
        global.currentMockWs = null;
        vi.useFakeTimers(); // This lets us fast-forward time (for your setTimeout)
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('should connect, upgrade status, and save incoming telemetry', () => {
        const mockPin = "1234";
        const mockPagesData = []; // Blank grid

        // A. Mount the hook in our invisible terminal browser
        const { result } = renderHook(() => useMSFS(mockPin, mockPagesData));

        // It should start in the connecting phase
        expect(result.current.connectionStatus).toBe('connecting');

        // B. Simulate the server accepting the connection
        act(() => {
            global.currentMockWs.onopen(); 
            vi.advanceTimersByTime(1100); // Fast-forward past the 1000ms delay in your hook
        });

        // The hook should now be waiting for MSFS data
        expect(result.current.connectionStatus).toBe('authenticating');

        // C. Simulate a Delta Update payload arriving from the simulator!
        act(() => {
            const mockPayload = JSON.stringify({
                rpm: 2500,
                altitude: 6500,
                parking_brake_state: 1
            });

            // Fire the message exactly like the real internet would
            global.currentMockWs.onmessage({ data: mockPayload });
        });

        // D. THE FINAL VERDICT: Did the hook do its job?
        expect(result.current.connectionStatus).toBe('connected'); // Status upgraded!
        expect(result.current.simState.rpm).toBe(2500); // RPM saved!
        expect(result.current.simState.altitude).toBe(6500); // Altitude saved!
        expect(result.current.simState.parking_brake_state).toBe(1); // State saved!
    });
});