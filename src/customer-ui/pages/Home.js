import React, { useState, useEffect } from 'react';
import HomeHeader from '../components/HomeHeader';
import Items from '../components/Items';
import Cart from '../components/Cart';

import { Canvas } from '@react-three/fiber';
import Card3DComponent, { Controls } from '../components/Card3DComponent';

function Home() {

    // const [shoppingCart, setShoppingCart] = useState([]);
    // const [itemsData, setItemsData] = useState([]);
    // const [isCartOpen, setIsCartOpen] = useState(false);



    // useEffect(() => {
    //     const storedCart = localStorage.getItem('shoppingCart');
    //     if (storedCart) {
    //         setShoppingCart(JSON.parse(storedCart));
    //     }

    //     const storedItemsData = localStorage.getItem('tableData');
    //     if (storedItemsData) {
    //         setItemsData(JSON.parse(storedItemsData));
    //     }
    // }, []);


    return (
        // <div className='customer-home'>
        //     <HomeHeader shoppingCart={shoppingCart} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
        //     {itemsData.length > 0 ? <Items setShoppingCart={setShoppingCart} /> : <div></div>}
        //     {isCartOpen ? <Cart shoppingCart={shoppingCart} /> : null}


        // </div>
        // <Items />

        <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
            <Items />
        </div>
    );
}

export default Home;
