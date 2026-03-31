import Cell from './Cell';

export default function Grid({ pageData, isEditMode, onCellClick, onDeleteCell, onDropCell, onNavigate, simState, sendCommand }) {
    return (
        <div className="builder-grid">
            {pageData.map((cellData, index) => (
                <Cell 
                    key={index} 
                    index={index} 
                    cellData={cellData} 
                    isEditMode={isEditMode}
                    onClick={onCellClick}
                    onDelete={onDeleteCell}
                    onDropCell={onDropCell}
                    onNavigate={onNavigate} /* PASS NAVIGATION TO CELLS */
                    simState={simState}
                    sendCommand={sendCommand}
                />
            ))}
        </div>
    );
}