// src/admin-ui/pages/AdminDashboard.js
import React from 'react';
import Upload from '../components/Upload';
import { Link } from 'react-router-dom';


function AdminDashboard() {

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
        const container = document.querySelector('.table-container');

        const dataRows = data.split('\r\n');
        const finalArray = dataRows.map((row) => row.split(',').map((col) => col.trim()));

        const table = document.createElement('table');

        finalArray.forEach((rowData) => {
            const row = document.createElement('tr');
            rowData.forEach((cellData) => {
                if (cellData !== '') {
                    const cell = document.createElement('td');
                    cell.textContent = cellData;
                    row.appendChild(cell);
                }
            });

            if (row.children.length > 0) {
                table.appendChild(row);
            }
        });

        container.innerHTML = '';
        container.appendChild(table);

        localStorage.setItem('tableData', JSON.stringify(finalArray));
    }

    return (
        <div>
            <Link className="login" to="/customer" target="_blank">Live site</Link>
            <h1>Admin Dashboard</h1>
            <Upload fileInput={fileInput} loadFile={loadFile} />
        </div>
    );
}

export default AdminDashboard;
