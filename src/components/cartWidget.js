import React from 'react';
import cart from "../assets/images/shoppingCart.png";
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <Link to={`/ShoppingCart/`}>
            <button className="cart-btn">
            <img src={cart} alt="Cart Icon" className="cart-widget"/>
            </button>
            <p>{}</p>
        </Link>
        
    );
};

export default CartWidget;