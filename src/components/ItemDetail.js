import React, { useState } from 'react';
import ItemCounter from './ItemCount'
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function ItemDetail({ data }) {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
        };

    return (
        <div className=''>
            <img className='small' src={data.image} alt={data.name}></img>
            <h3>{data.name}</h3>
            <div>AR${data.price}</div>
            <p>{data.description}</p>
        {   <div>
                {
                    goToCart ? <Link to='/shoppingCart'>Finalizar compra</Link>
                :<ItemCounter initial={1} stock={data.stock} onAdd={onAdd} />
            }
            </div>}
        </div>
    )
}
