import React from "react";



export default function ShoppingCart() {
    return (
        <aside className="block col-1">
            <h2>Carrito de compras</h2>
            {/* <div>
                {cartItems.length === 0 && <div>El carrito esta vacio</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-2">{item.name}</div>
                        <div className="col-2">
                            <button  className="add">+</button>
                            <button className="remove">-</button>
                        </div>
                        <div className="col-2 text-right">
                            {item.qty} x AR${item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
            </div> */}
        </aside>
    )
}