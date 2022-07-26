import React from "react";
import { addDoc, collection, getFirestore, startAfter } from "firebase/firestore";
import Swal from 'sweetalert2'
import { link } from 'react-router-dom'
import { useCartContext } from "../context/CartContext";
import ItemInCart from "./ItemInCart";

const ShoppingCart = () => {
    const { cart, totalPrice, clearCart } = useCartContext();

    const order = {
        buyer: {
            name: 'John',
            email: 'john@example.com',
            phone: '123-456-1234',
            address: 'asdasdasdasdasdasdasdasdasdas'
        },
        items: cart.map(product => ({id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))
    }

    if (cart.length === 0) 
        return (
            <>
            <div className='block'>
                <p>No hay productos en el carrito</p>
            </div>
            </>
        );

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
                <button onClick={handleClick}>Confirmar compra</button>
            </div>
        </>
    )
}

export default ShoppingCart
