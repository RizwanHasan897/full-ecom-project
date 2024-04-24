import React from "react";

function Cart({ shoppingCart }) {
    const renderCart = () => {
        return (
            shoppingCart.map(cart => (
                <div className='cart-item' key={cart.id}>
                    <img src={require(`./../image/${cart.name}.jpg`)} />
                    <h1>{cart.name}</h1>
                </div>
            ))
        );
    };

    return (
        <div className="cart-div">
            {renderCart()}
        </div>
    );
}

export default Cart;
