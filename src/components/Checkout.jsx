import { useState } from "react";
import { useCart } from "../context/CartContext";  // Usamos el hook para obtener el carrito
import { Link } from "react-router-dom";

const Checkout = () => {
    const { cart, clearCart } = useCart();  // Desestructuramos cart y clearCart del contexto
    const [user, setUser] = useState({});
    const [orderId, setOrderId] = useState('');
    const [showForm, setShowForm] = useState(false);  // Estado para mostrar el formulario

    const userData = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const finalizarCompra = (e) => {
        e.preventDefault();
        if (!user.name || !user.lastname || !user.email || !user.address) {
            alert("Los campos son obligatorios");
        } else {
            setOrderId("12345");  // Simulamos un ID de orden
            alert("Compra realizada con éxito");
            clearCart();  // Limpiar el carrito después de la compra
            setShowForm(false);  // Ocultar el formulario
        }
    };

    return (
        <div className="container mx-auto mt-8">
            {orderId !== '' ? (
                <div>
                    <h4>¡Tu orden ha sido generada con éxito!</h4>
                    <h5>El ID de tu orden es: {orderId}</h5>
                    <Link to="/" className="btn btn-success">
                        Volver al inicio
                    </Link>
                </div>
            ) : (
                <div>
                    <h4>Detalles de tu carrito</h4>
                    {cart.length === 0 ? (
                        <p>No hay productos en tu carrito</p>
                    ) : (
                        cart.map((product) => (
                            <div key={product.id}>
                                <p>{product.name} - {product.quantity} x ${product.price}</p>
                            </div>
                        ))
                    )}
                    <button className="btn btn-primary mt-4" onClick={() => setShowForm(true)}>
                        Finalizar compra
                    </button>
                </div>
            )}

            {showForm && (
                <div className="checkout-form">
                    <h4>Completa tus datos para finalizar la compra</h4>
                    <form onSubmit={finalizarCompra}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            onChange={userData}
                            required
                        />
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Apellido"
                            onChange={userData}
                            required
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Dirección"
                            onChange={userData}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            onChange={userData}
                            required
                        />
                        <button type="submit">Finalizar compra</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Checkout;
