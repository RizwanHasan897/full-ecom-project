import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

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
                <div className="card" key={index}>
                    <div className="card-img-container">
                        {itemData.imageSrc && <img src={require(`./../image/${itemData.imageSrc}`)} alt={itemData.name} className='card-img' />}
                    </div>
                    <div className="card-content">
                        <h3 className='card-name'>{itemData.name}</h3>
                        <p className='card-deet'>Height: {itemData.height}cm | Width: {itemData.width}cm | Quantity: {itemData.quainity} |</p>
                        <div className='card-buy'>
                            <p className='card-price'>Price: £{itemData.price}</p>
                            <button className='card-cart' onClick={(e) => addToCart(e)}><FontAwesomeIcon icon={faCartShopping} /></button>
                        </div>
                    </div>
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
// webpack, Image react, imges, learn webpack and config.
export default Items;
