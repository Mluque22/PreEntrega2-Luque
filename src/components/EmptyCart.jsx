import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <div className="empty-cart">
            <h2>Tu carrito está vacío</h2>
            <Link to="/" className="btn btn-primary">Ir a la tienda</Link>
        </div>
    );
};

export default EmptyCart;
