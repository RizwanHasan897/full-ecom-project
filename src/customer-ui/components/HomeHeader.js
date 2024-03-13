import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function HomeHeader({ shoppingCart, setCartActive }) {

    function openCart() {
        if (setCartActive) {
            setCartActive = !setCartActive;
        } else {
            setCartActive = true
        }
    }


    return (
        <>
            <div className="home-header">
                <h1 className="home-title">AniWorld</h1>
                <div className="home-icon">
                    <button className="home-admin"><Link className="login" to="/admin" target="_blank">Admin UI</Link></button>
                    <div className="home-cart">
                        <button className='home-cart' onClick={openCart} ><FontAwesomeIcon icon={faCartShopping} /></button>
                        <h3 className="home-number">{shoppingCart.length}</h3>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HomeHeader;
