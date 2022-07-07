import React from 'react';
import Item from './Item';


export default function ItemList({ productList }) {

    return (
        <main className="main col-2">
            <h2>Nuestro merchandising</h2>
            <div className="row container">
                {productList.map((product) => ( 
                    <Item key={product.id} product={product}></Item>
                ))}
            </div>
        </main>
    );
}
