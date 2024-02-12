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

    const filteredTableData = tableData.filter((rowData) => rowData.some((cellData) => cellData !== ''));

    return (
        <div className="card-slider-container">
            {filteredTableData.slice(1).map((rowData, index) => (
                <div className="card" key={index}>
                    <ul>
                        {rowData.map((cellData, cellIndex) => (
                            <li key={cellIndex} className={"card-data" + cellIndex}>
                                {cellData}
                                {console.log(cellData)}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Items;
