import React, { useEffect, useState } from 'react';

function Items() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'tableData') {
                const data = event.newValue;
                setTableData(JSON.parse(data));
            }
        };

        window.addEventListener('storage', handleStorageChange);

        const data = localStorage.getItem('tableData');
        if (data) {
            setTableData(JSON.parse(data));
        }

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <div className="card-container">
            {tableData.map((rowData, index) => (
                <div className="card" key={index}>
                    <ul>
                        {rowData.map((cellData, cellIndex) => (
                            index !== 0 && (
                                <li key={cellIndex}>
                                    {cellData}
                                </li>
                            )
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Items;
