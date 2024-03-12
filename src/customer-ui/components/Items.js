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

    const convertToObj = (data) => ({
        imageSrc: data[0],
        name: data[1],
        price: data[2],
        height: data[3],
        width: data[4],
        quainity: data[5],
    });

    const renderItems = () => {
        return tableData.slice(1).map((rowData, index) => {
            const itemData = convertToObj(rowData);
            return (
                <div className="card" key={index}>
                    <ul>
                        <li key={index} className="card-data">
                            {console.log(itemData.imageSrc)}
                            {itemData.imageSrc ? <img src={require(`./../image/${itemData.imageSrc}`)} alt={itemData.name} className='card-img' /> : null}
                            <p>{itemData.name}</p>
                            <p>{itemData.price}</p>
                            <p>{itemData.height}</p>
                            <p>{itemData.width}</p>
                            <p>{itemData.quainity}</p>
                        </li>
                    </ul>
                </div>
            );
        });
    };

    return (
        <div className="card-slider-container">
            {renderItems()}
        </div>
    );
}

export default Items;
