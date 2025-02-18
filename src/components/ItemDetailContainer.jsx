import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../mock/data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getOneProduct(id);
                setProduct(productData);
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        };
        fetchProduct();
    }, [id]);

    return (
        <div className="item-detail-container">
            {product ? (
                <ItemDetail product={product} />
            ) : (
                <p>Cargando detalles del producto...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
