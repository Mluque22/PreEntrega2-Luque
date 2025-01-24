import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const mockProducts = {
    camisetas: [{ id: 1, name: 'Camiseta Lakers', price: 30 }],
    shorts: [{ id: 2, name: 'Shorts Bulls', price: 20 }],
    gorras: [{ id: 3, name: 'Gorra Celtics', price: 15 }],
};

const ItemListContainer = ({ greeting, texto }) => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {

        if (categoryId) {

            setProducts(mockProducts[categoryId] || []);
        } else {

            setProducts([
                ...mockProducts.camisetas,
                ...mockProducts.shorts,
                ...mockProducts.gorras,
            ]);
        }
    }, [categoryId]);

    return (
        <div className="itemContainer">
            <h1 className="text-center">{greeting}</h1>
            <p className="pTexto">{texto}</p>


            <div>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                            <Link to={`/item/${product.id}`}>Ver detalle</Link>
                        </div>
                    ))
                ) : (
                    <p>No hay productos en esta categoría.</p>
                )}
            </div>
        </div>
    );
};


ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
};

export default ItemListContainer;
