import React from "react";
import { useCartContext } from "../context/CartContext";
import ItemInCart from "./ItemInCart";

const ShoppingCart = () => {
    const { cart, totalPrice, clearCart } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
            <div className='block'>
                <p>No hay productos en el carrito</p>
            </div>
            </>
        );
}
    return (
        <>
            <div className='block'>
                {
                    cart.map(product => <ItemInCart key={product.id} product={product} />)
                }
                <p>
                    Total: {totalPrice()}
                </p>
                <button onClick={clearCart}>Vaciar carrito</button>
            </div>
        </>
    )
}

export default ShoppingCart
