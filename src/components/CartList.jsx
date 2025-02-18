import PropTypes from "prop-types";
import CartItem from "./CartItem";

const CartList = ({ cartItems, removeFromCart, updateQuantity }) => {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-list">
            <h1>Tu Carrito</h1>
            {cartItems.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                removeFromCart={removeFromCart}
                                updateQuantity={updateQuantity}
                            />
                        ))}
                    </div>
                    <div className="cart-total">
                        <p>Total: ${calculateTotal().toFixed(2)}</p>
                        <button className="checkout-btn">Realizar Pedido</button>
                    </div>
                </>
            )}
        </div>
    );
};

CartList.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    removeFromCart: PropTypes.func.isRequired,
    updateQuantity: PropTypes.func.isRequired,
};

export default CartList;
