import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Card({itemData, index, addToCart}){
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
    )
}

export default Card