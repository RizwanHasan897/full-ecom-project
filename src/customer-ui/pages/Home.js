import React, { useState, useEffect } from 'react';
import HomeHeader from '../components/HomeHeader';
import Items from '../components/Items';

function Home() {
    const [shoppingCart, setShoppingCart] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('shoppingCart');
        if (storedCart) {
            setShoppingCart(JSON.parse(storedCart));
        }
    }, []);

    return (
        <div className='customer-home'>
            <HomeHeader shoppingCart={shoppingCart} />
            {1 ? <Items setShoppingCart={setShoppingCart} /> : <div></div>}
        </div>
    );
}

export default Home;
