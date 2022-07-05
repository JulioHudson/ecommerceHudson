import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getProd } from './data';

const ItemDetailContainer = () => {
    const [product, setProduct]=useState({})
    const [loading, setLoading]=useState(true)

    const { id } = useParams();

    useEffect(() => {
    getProd(id)
        .then((res) => {
            setProduct(res);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [id]);

    return (
    <div>
        {loading ? <p>Cargando...</p> : <ItemDetail product={product}/> }
    </div>
    )
}

export default ItemDetailContainer