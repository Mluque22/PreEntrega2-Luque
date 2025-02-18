import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import { useCart } from "../context/CartContext";

const CartView = () => {
    const { cart, setCart, removeFromCart } = useCart();

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            const updatedCart = cart.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            );
            setCart(updatedCart);
        }
    };

    return (
        <div className="cart-container">
            {!cart.length ? (
                <EmptyCart />
            ) : (
                <div>
                    <h2>Tu Carrito</h2>
                    <CartList cartItems={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
                </div>
            )}
        </div>
    );
};

export default CartView;
