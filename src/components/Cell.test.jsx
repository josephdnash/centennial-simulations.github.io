import '@testing-library/jest-dom'; // <-- THE MISSING MAGIC LINK!
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cell from './Cell';

// 1. --- MOCK THE DICTIONARY ---
vi.mock('../utils/dictionary', () => ({
    DICTIONARY: {
        "rpm_gauge": { name: "RPM", type: "gauge", dataKey: "rpm", decimals: 0 },
        "brake_toggle": { name: "Parking Brake", type: "smart_toggle", stateKey: "parking_brake_state" },
        "nav_light": { name: "Nav Lights", type: "button", stateKey: "NAV_LIGHT_STATE" }
    }
}));

// 2. --- THE TEST SUITE ---
describe('Cell Component Logic', () => {

    it('renders the correct value for a standard gauge', () => {
        const mockSimState = { rpm: 2500 };
        const mockCellData = { id: "rpm_gauge" };

        render(<Cell cellData={mockCellData} simState={mockSimState} isEditMode={false} />);

        expect(screen.getByText('2500')).toBeInTheDocument();
    });

    it('applies the "active" CSS class when a toggle is ON', () => {
        const mockSimState = { parking_brake_state: 1 };
        const mockCellData = { id: "brake_toggle" };

        const { container } = render(<Cell cellData={mockCellData} simState={mockSimState} isEditMode={false} />);
        
        expect(container.firstChild).toHaveClass('active');
    });

    it('successfully finds lowercase sim variables when dictionary expects uppercase (Case Insensitivity Test)', () => {
        // Setup: The server sends strict lowercase (real MSFS behavior), but our dictionary has UPPERCASE
        const mockSimState = { nav_light_state: 1 }; 
        const mockCellData = { id: "nav_light" };

        const { container } = render(<Cell cellData={mockCellData} simState={mockSimState} isEditMode={false} />);
        
        // Assert that the fallback logic worked and the button lit up!
        expect(container.firstChild).toHaveClass('active');
    });

    it('renders the Ghost Cell warning if the dictionary item is missing', () => {
        const mockCellData = { id: "deleted_custom_button" };

        // Added an empty simState here just to be perfectly safe!
        render(<Cell cellData={mockCellData} simState={{}} isEditMode={true} />);

        expect(screen.getByText(/GHOST/i)).toBeInTheDocument();
    });

});