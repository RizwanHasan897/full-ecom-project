import React, { useEffect, useState } from 'react';

function Items() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('tableData');
        if (data) {
            setTableData(JSON.parse(data));
        }
    }, []);

    return (
        <div className="card-container">
            {tableData.map((rowData, index) => (
                <div className="card">
                    <ul>
                        {rowData.map((cellData) => (
                            index !== 0 && (
                                <li>
                                    {cellData}
                                </li>
                            )
                        ))}

                    </ul>
                </div>
            ))}

        </div>

    )
}

export default Items