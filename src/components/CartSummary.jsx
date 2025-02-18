import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartSummary = () => {
    const { cart, removeItem, clearCart } = useCart();  // Usamos el contexto para obtener el carrito

    const totalAmount = cart.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <div className="container mt-4">
            <h2>Resumen del Carrito</h2>
            <div>
                {cart.length === 0 ? (
                    <p>No tienes productos en el carrito.</p>
                ) : (
                    <div>
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id}>
                                    <div>
                                        <strong>{item.name}</strong>
                                        <p>Cantidad: {item.quantity}</p>
                                        <p>Precio: ${item.price}</p>
                                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <p>Total: ${totalAmount}</p>
                            <button onClick={clearCart}>Limpiar carrito</button>
                            <Link to="/checkout" className="btn btn-success">Ir a pagar</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartSummary;
