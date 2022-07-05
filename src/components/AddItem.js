/* import React from "react";
import { useState } from 'react';


export default function UseOnAdd() {
        const { products } = data;
        const [cartItems, setCartItems] = useState([]);
        const exist = cartItems.find((x) => x.id === products.id);
        if (exist) {
            if (exist.qty + 1 <= products.stock){
            setCartItems(
            cartItems.map((x) =>
                x.id === products.id ? { ...exist, qty: exist.qty + 1} : x
            )
            );
        }
        } else {
        setCartItems([...cartItems, { ...products, qty: 1 }]);
        }
    }; */