import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Items from '../components/Items';

function Home() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const handleStorageChange = () => {
            const data = localStorage.getItem('tableData');
            if (data) {
                setTableData(JSON.parse(data));
            }
        };

        window.addEventListener('storage', handleStorageChange);

        handleStorageChange();

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);


    return (

        <div>
            <Header />
            <h1>Customer Home Page</h1>
            <Items />

        </div>
    );
}

export default Home;
