import React, { useState, useEffect } from 'react';
import HomeHeader from '../components/HomeHeader';
import Items from '../components/Items';

function Home() {

    const [shoppingCart, setShoppingCart] = useState([]);
    const [itemsData, setItemsData] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('shoppingCart');
        if (storedCart) {
            setShoppingCart(JSON.parse(storedCart));
        }

        const storedItemsData = localStorage.getItem('tableData');
        if (storedItemsData) {
            setItemsData(JSON.parse(storedItemsData));
        }
    }, []);

    return (
        <div className='customer-home'>
            <HomeHeader shoppingCart={shoppingCart} />
            {itemsData.length > 0 ? <Items setShoppingCart={setShoppingCart} /> : <div></div>}
        </div>
    );
}

export default Home;
