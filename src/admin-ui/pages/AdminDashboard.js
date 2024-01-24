import React, { useEffect, useState } from 'react';
import Upload from '../components/Upload';
import { Link } from 'react-router-dom';
import EditPop from '../components/EditPop';

function AdminDashboard() {
    const [tableData, setTableData] = useState([]);

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

    function editTrFunc(data) {
        // console.log(data)
        <EditPop props={data} />

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
                    <tbody>
                        {tableData.map((rowData, rowIndex) => (
                            <tr key={rowIndex}>
                                {rowData.map((cellData, cellIndex) => (
                                    <td key={cellIndex} onClick={() => editTrFunc(cellData)}>{cellData}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <EditPop />


        </div>
    );
}

export default AdminDashboard;
