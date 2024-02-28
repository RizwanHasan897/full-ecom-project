import React, { useEffect, useState, useRef } from 'react';
import Upload from '../components/Upload';
import { Link } from 'react-router-dom';

function AdminDashboard() {
    const [tableData, setTableData] = useState([]);
    const [editingCell, setEditingCell] = useState(null);
    const [hoveredRow, setHoveredRow] = useState(null);
    const [hoveredCol, setHoveredCol] = useState(null);

    const inputRef = useRef(null);

    useEffect(() => {
        const storedData = localStorage.getItem('tableData');
        if (storedData) {
            setTableData(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        if (editingCell) {
            inputRef.current.focus();
        }
    }, [editingCell]);

    function fileInput(event) {
        const fileInput = event.target;
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const data = event.target.result;
                loadFile(data);
            };
            reader.readAsText(file);
        }
    }

    function loadFile(data) {
        const dataRows = data.split('\r\n');
        const finalArray = dataRows.map((row) => row.split(',').map((col) => col.trim()));

        setTableData(finalArray);
        localStorage.setItem('tableData', JSON.stringify(finalArray));
    }

    function updateCellValue(newValue, rowIndex, cellIndex) {
        const updatedTableData = [...tableData];
        updatedTableData[rowIndex][cellIndex] = newValue;
        setTableData(updatedTableData);
        localStorage.setItem('tableData', JSON.stringify(updatedTableData));
        setEditingCell(null);
    }

    function editTable(rowIndex, cellIndex) {
        setEditingCell({ rowIndex, cellIndex });
    }

    return (
        <div>
            <Link className="login" to="/customer" target="_blank">
                Live site
            </Link>
            <h1>Admin Dashboard</h1>
            <Upload fileInput={fileInput} loadFile={loadFile} />

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            {tableData.length > 0 &&
                                tableData[0].map((header, headerIndex) => (
                                    <th key={headerIndex}>{header}</th>
                                ))}
                        </tr>
                    </thead>

                    <tbody>
                        {tableData.slice(1).map((rowData, rowIndex) => {
                            // Check if the row contains any non-empty cells
                            const hasData = rowData.some(cellData => cellData.trim() !== '');
                            if (!hasData) {
                                return null; // Skip rendering empty rows
                            }

                            return (
                                <tr
                                    key={rowIndex}
                                    onMouseEnter={() => rowIndex > 0 && setHoveredRow(rowIndex)}
                                    onMouseLeave={() => setHoveredRow(null)}
                                >
                                    {rowData.map((cellData, cellIndex) => (
                                        <td
                                            key={cellIndex}
                                            className={
                                                (rowIndex === hoveredRow || cellIndex === hoveredCol) &&
                                                    !(editingCell && editingCell.rowIndex - 1 === rowIndex && editingCell.cellIndex === cellIndex)
                                                    ? 'hovered'
                                                    : ''
                                            }
                                            onMouseEnter={() => setHoveredCol(cellIndex)}
                                            onMouseLeave={() => setHoveredCol(null)}
                                            onClick={() => editTable(rowIndex + 1, cellIndex)}
                                        >
                                            {editingCell && editingCell.rowIndex === rowIndex + 1 && editingCell.cellIndex === cellIndex ? (
                                                <input
                                                    type="text"
                                                    className='edit-input'
                                                    value={cellData}
                                                    onChange={(e) => setTableData(prevTableData => {
                                                        const updatedTableData = [...prevTableData];
                                                        updatedTableData[rowIndex + 1][cellIndex] = e.target.value;
                                                        return updatedTableData;
                                                    })}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter') {
                                                            updateCellValue(e.target.value, rowIndex + 1, cellIndex);
                                                        }
                                                    }}
                                                    onBlur={(e) => updateCellValue(e.target.value, rowIndex + 1, cellIndex)}
                                                    ref={inputRef}
                                                />
                                            ) : (
                                                cellData
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminDashboard;
