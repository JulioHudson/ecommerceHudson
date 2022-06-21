import React from 'react';
import cart from "../../assets/images/shoppingCart.png";
import "./styles.css";

const CartWidget = () => {
    return (
        <button className="cart-btn">
            <img src={cart} alt="Cart Icon" className="cart-widget"/>
        </button>
    );
};

export default CartWidget;