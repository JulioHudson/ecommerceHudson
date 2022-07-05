import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getProds } from './data'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productList, setProductList]=useState([])
    const [loading, setLoading]=useState(true)
    const { categoryId } = useParams();
    console.log(categoryId);

    useEffect(() => {
        getProds(categoryId)
            .then((res) => {
                setProductList(res);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
    },[categoryId]);

    return (
    <div>
        {loading ? <p>Cargando...</p> : <ItemList productList={productList}/> }
    </div>
    )
}

export default ItemListContainer