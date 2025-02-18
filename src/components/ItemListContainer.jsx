import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productosDB } from "../mock/data";
import ItemList from "./ItemList";
import PropTypes from "prop-types";

const ItemListContainer = ({ greeting, texto }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
            const filteredProducts = productosDB.filter((product) => product.category === categoryId);
            setProducts(filteredProducts);
        } else {
            setProducts(productosDB);
        }
        setLoading(false);
    }, [categoryId]);

    if (loading) {
        return <p className="text-center mt-8">Cargando productos...</p>;
    }

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold text-center mb-8">{greeting}</h1>
            <p className="text-center mb-8">{texto}</p>

            {categoryId ? (
                <h2 className="text-2xl font-semibold text-center mb-8 capitalize">
                    Productos de la categoría: {categoryId}
                </h2>
            ) : (
                <h2 className="text-2xl font-semibold text-center mb-8">Todos los productos</h2>
            )}

            {products.length === 0 ? (
                <p className="text-center">No hay productos en esta categoría.</p>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
};

export default ItemListContainer;
