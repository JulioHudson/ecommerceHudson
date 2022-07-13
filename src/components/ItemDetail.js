import React, { useState } from 'react';
import ItemCounter from './ItemCount'
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function ItemDetail({ product }) {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(product, quantity);
        };

    return (
        <div className='Detail'>
            <img className='small' src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>AR${product.price}</div>
            <p>{product.description}</p>
        {   <div>
                {
                    goToCart ? <Link to='/shoppingCart'>Finalizar compra</Link>
                :<ItemCounter initial={1} stock={product.stock} onAdd={onAdd} />
            }
            </div>}
        </div>
    )
}
