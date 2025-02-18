import PropTypes from 'prop-types';
import { useCart } from '../context/CartContext';

const CartItem = ({ product }) => {
    const { removeFromCart } = useCart();

    const handleRemove = () => {
        removeFromCart(product.id); // Elimina el producto cuando se hace click en el botón
    };

    return (
        <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex">
                <img src={product.img} alt={product.name} className="img-thumbnail" style={{ width: '80px', height: '80px' }} />
                <div className="ms-3">
                    <h5>{product.name}</h5>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Precio: ${product.price}</p>
                    <p>Total: ${product.price * product.quantity}</p>
                </div>
            </div>
            <button onClick={handleRemove} className="btn btn-danger">Eliminar</button>
        </div>
    );
};

CartItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
    }).isRequired,
};

export default CartItem;
