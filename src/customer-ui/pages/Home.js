import React, { useState, useEffect } from 'react';
import HomeHeader from '../components/HomeHeader';
import Items from '../components/Items';
import Cart from '../components/Cart';

function Home() {

    const [shoppingCart, setShoppingCart] = useState([]);
    const [itemsData, setItemsData] = useState([]);
    const [cartActive, setCartActive] = useState(false);

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
            <HomeHeader shoppingCart={shoppingCart} setCartActive={setCartActive} />
            {itemsData.length > 0 ? <Items setShoppingCart={setShoppingCart} /> : <div></div>}
            {cartActive ? <Cart /> : null}
        </div>
    );
}

export default Home;
