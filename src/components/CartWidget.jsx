import { BsCart4 } from "react-icons/bs";
import { useCart } from "../context/CartContext";  // Asegúrate de que el path sea correcto

const CartWidget = () => {
    const { cart } = useCart();  // Usamos el contexto para obtener el carrito

    // Obtenemos el número total de productos en el carrito
    const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);

    return (
        <div>
            <BsCart4 fontSize={'1.5rem'} />
            <span style={{ marginLeft: '8px', fontWeight: 'bold' }}>{totalItems}</span>
        </div>
    );
}

export default CartWidget;
