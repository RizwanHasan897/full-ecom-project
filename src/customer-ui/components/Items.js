import React, { useEffect, useState } from 'react';
import Card from './Card';

import { Canvas } from '@react-three/fiber';
import Card3DComponent, { Controls } from '../components/Card3DComponent';

function Items({ setShoppingCart }) {
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
        quainity: data[5]
    });

    function addToCart(e) {
        e.preventDefault();
        const target = e.currentTarget;
        const grandparent = target.closest('.card');
        const imageSrc = grandparent.querySelector('.card-img').getAttribute('src');
        const name = grandparent.querySelector('.card-name').textContent;

        const cartItem = {
            imageSrc,
            name
        };

        setShoppingCart(prevShoppingCart => {
            const newCart = [cartItem, ...prevShoppingCart];
            localStorage.setItem('shoppingCart', JSON.stringify(newCart));
            return newCart;
        });
    }

    useEffect(() => {
        const storedCart = localStorage.getItem('shoppingCart');
        if (storedCart) {
            setShoppingCart(JSON.parse(storedCart));
        }
    }, [setShoppingCart]);

    const renderItems = () => {
        return tableData.slice(1).map((rowData, index) => {
            const itemData = convertToObj(rowData);
            if (!itemData.imageSrc && !itemData.name && !itemData.price && !itemData.height && !itemData.width && !itemData.quainity) {
                return null;
            }
            return (
                
                // <Card itemData={itemData} index={index}  addToCart={addToCart}/>
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Card3DComponent />
                    <Controls />
                </Canvas>

            );
        });
    };

    return (
        <div className="card-slider-container">
            {renderItems()}
        </div>
    );
}
// webpack, Image react, imges, learn webpack and config.
export default Items;
