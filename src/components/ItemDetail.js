import React from 'react';

export default function ItemDetail({ product }) {

    return (
        <div>
            <img className='small' src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>AR${product.price}</div>
            <p>{product.description}</p>
            <div>
                <button>Ver más</button>
            </div>
        </div>
    )
}
