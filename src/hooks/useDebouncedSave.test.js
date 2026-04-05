import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import useDebouncedSave from './useDebouncedSave';

describe('useDebouncedSave Hook', () => {

    beforeEach(() => {
        // Hijack the global clock before every test
        vi.useFakeTimers(); 
    });

    afterEach(() => {
        // Restore the normal clock after every test
        vi.useRealTimers(); 
    });

    it('should only fire once if called multiple times rapidly', () => {
        const mockSaveFunction = vi.fn(); // Our spy
        const delay = 500;

        // Mount the hook
        const { result } = renderHook(() => useDebouncedSave(mockSaveFunction, delay));

        // Action: The user spams the save button 5 times instantly
        result.current("Data 1");
        result.current("Data 2");
        result.current("Data 3");
        result.current("Data 4");
        result.current("Data 5");

        // Fast-forward time by 200ms (not enough time to trigger the save!)
        vi.advanceTimersByTime(200);
        expect(mockSaveFunction).not.toHaveBeenCalled(); // Ensure Firebase is safe

        // Fast-forward past the 500ms threshold
        vi.advanceTimersByTime(300);

        // Assertion: It should have only sent ONE request to Firebase
        expect(mockSaveFunction).toHaveBeenCalledTimes(1);
    });

    it('should always save the MOST RECENT data passed to it', () => {
        const mockSaveFunction = vi.fn();
        const { result } = renderHook(() => useDebouncedSave(mockSaveFunction, 500));

        // Action: User changes state to A, then quickly to B
        result.current({ rpm: 1000 });
        result.current({ rpm: 2500 }); // This is the final state!

        // Fast-forward time to trigger the save
        vi.advanceTimersByTime(500);

        // Assertion: It should have ignored the 1000 RPM and only saved 2500
        expect(mockSaveFunction).toHaveBeenCalledWith({ rpm: 2500 });
    });

    it('should reset the timer if called again before the delay finishes', () => {
        const mockSaveFunction = vi.fn();
        const { result } = renderHook(() => useDebouncedSave(mockSaveFunction, 500));

        // First call
        result.current("First click");
        
        // Fast forward 400ms (Almost there...)
        vi.advanceTimersByTime(400);
        
        // Second call! (This should restart the 500ms clock from zero)
        result.current("Second click");

        // Fast forward another 200ms. 
        // Total time passed is 600ms, but only 200ms since the last click.
        vi.advanceTimersByTime(200);
        expect(mockSaveFunction).not.toHaveBeenCalled(); // Timer was successfully reset!

        // Fast forward the remaining 300ms to finish the new timer
        vi.advanceTimersByTime(300);
        expect(mockSaveFunction).toHaveBeenCalledTimes(1);
    });
});