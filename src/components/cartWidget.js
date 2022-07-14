import React from 'react';
import cart from "../assets/images/shoppingCart.png";
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const CartWidget = () => {
    const { totalProducts } = useCartContext();
    return (
        <>
        <Link to={`/ShoppingCart/`}>
            <div>
                <button className="cart-btn">
                <img src={cart} alt="Cart Icon" className="cart-widget"/>
                </button>
                <span className='cart-num'>{totalProducts() || ''}</span>
            </div>
        </Link>
        </>
    );
};

export default CartWidget;