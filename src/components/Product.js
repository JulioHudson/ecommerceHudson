import React from 'react';

export default function Product(props) {
    const {product, onAdd} = props;
    return (
        <div>
            <img className='small' src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>AR${product.price}</div>
            <p>{product.description}</p>
            <div>
                <button onClick={() => onAdd(product)}>Agregar al carrito</button>
            </div>
        </div>
    )
}
