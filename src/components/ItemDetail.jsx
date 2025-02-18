import { useCart } from "../context/CartContext";
import { getOneProduct } from "../mock/data";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ItemQuantitySelector from "./ItemQuantitySelector";  // Importamos el selector de cantidad

const ItemDetail = ({ product }) => {
    const { addToCart } = useCart();
    const [productDetails, setProductDetails] = useState(null);
    const [quantity, setQuantity] = useState(1);  // Estado para la cantidad

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getOneProduct(product.id);
                setProductDetails(productData);
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        };
        fetchProduct();
    }, [product.id]);

    const handleAddToCart = () => {
        if (productDetails) {
            // Pasamos la cantidad seleccionada junto con el producto
            addToCart({ ...productDetails, quantity });
        }
    };

    return (
        <div className="item-detail">
            {productDetails ? (
                <>
                    <h2>{productDetails.name}</h2>
                    <img src={productDetails.img} alt={productDetails.name} />
                    <p>{productDetails.description}</p>
                    <p>Precio: ${productDetails.price}</p>

                    {/* Selector de cantidad */}
                    <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />

                    {/* Botón de agregar al carrito */}
                    <button className="agregar-carrito" onClick={handleAddToCart}>
                        Agregar al carrito
                    </button>
                </>
            ) : (
                <p>Cargando detalles del producto...</p>
            )}
        </div>
    );
};

ItemDetail.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
    }).isRequired,
};

export default ItemDetail;
