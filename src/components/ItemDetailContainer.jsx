import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../mock/data'; // Ya importa la función correctamente
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getOneProduct(id)
            .then((data) => setProduct(data))
            .catch((err) => setError(err));
    }, [id]);

    if (error) {
        return <p className="text-red-500 text-center mt-8">Error: {error}</p>;
    }

    return (
        <div className="container mx-auto mt-8">
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;
