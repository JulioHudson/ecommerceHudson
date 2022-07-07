import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({product}) {

    return (
        <div className='card'>
            <img className='small' src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>AR${product.price}</div>
            <Link to={`/detail/${product.id}`}>Ver detalle</Link>
        </div>
    )
}


