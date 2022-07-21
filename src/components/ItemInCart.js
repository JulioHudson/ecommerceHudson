import React from 'react';
import { useCartContext } from '../context/CartContext';

const ItemInCart = ({ product }) => {
    const { removeProduct } = useCartContext();

    return (
        <div className="cart">
            <img src={product.image} alt={product.name} />
            <div>
                <h3>Producto: {product.name}</h3>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.price}</p>
                <p>Subtotal: {product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemInCart