import React, { useEffect, useState } from 'react';
import Upload from '../components/Upload';
import { Link } from 'react-router-dom';

function AdminDashboard() {
    const [tableData, setTableData] = useState([]);
    const [hoveredRow, setHoveredRow] = useState(null);
    const [hoveredCol, setHoveredCol] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem('tableData');
        if (storedData) {
            setTableData(JSON.parse(storedData));
        }
    }, []);

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

    function editTable(event, rowIndex, cellIndex) {
        const tdElement = event.target;
        const currentValue = tableData[rowIndex + 1][cellIndex];

        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.value = currentValue;
        tdElement.classList.add('edit-input');

        const changeButton = document.createElement('button');
        changeButton.innerText = '✓';
        changeButton.classList.add('change-btn');

        const cancelChangeButton = document.createElement('button');
        cancelChangeButton.innerText = 'X';
        cancelChangeButton.classList.add('cancel-btn');


        const checkButtonExist = tdElement.querySelector('button');
        if (checkButtonExist === null) {
            tdElement.innerHTML = '';
            tdElement.appendChild(inputElement);
            tdElement.appendChild(cancelChangeButton);
            tdElement.appendChild(changeButton);
            inputElement.focus();

        }

        changeButton.addEventListener('click', () => {
            const updatedTableData = [...tableData];
            updatedTableData[rowIndex + 1][cellIndex] = inputElement.value;
            setTableData(updatedTableData);
            localStorage.setItem('tableData', JSON.stringify(updatedTableData));

            tdElement.innerHTML = currentValue;
        });

        cancelChangeButton.addEventListener('click', () => {
            tdElement.innerHTML = currentValue;
        });
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
                        {tableData.slice(1).map((rowData, rowIndex) => (
                            <tr
                                key={rowIndex}
                                onMouseEnter={() => setHoveredRow(rowIndex)}
                                onMouseLeave={() => setHoveredRow(null)}
                            >
                                {rowData.map((cellData, cellIndex) => (
                                    <React.Fragment key={cellIndex}>
                                        {cellData !== '' && (
                                            <td
                                                onClick={(e) => editTable(e, rowIndex, cellIndex)}
                                                className={rowIndex === hoveredRow || cellIndex === hoveredCol ? 'hovered' : ''}
                                                onMouseEnter={() => setHoveredCol(cellIndex)}
                                                onMouseLeave={() => setHoveredCol(null)}>
                                                {cellData}
                                            </td>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>



        </div>
    );
}

export default AdminDashboard;
