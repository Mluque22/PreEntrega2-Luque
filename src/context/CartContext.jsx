    /* eslint-disable react-refresh/only-export-components */
    import { createContext, useState, useContext } from "react";
    import PropTypes from "prop-types"; // Importamos PropTypes para la validación de props

    const CartContext = createContext();

    // Hook para usar el contexto
    export const useCart = () => {
        return useContext(CartContext);
    };

    // Proveedor del contexto
    export const CartProvider = ({ children }) => {
        const [cart, setCart] = useState([]);

        const addToCart = (product) => {
            const existingProductIndex = cart.findIndex(item => item.id === product.id);

            if (existingProductIndex !== -1) {
                // Si el producto ya existe, incrementar la cantidad
                const updatedCart = [...cart];
                updatedCart[existingProductIndex].quantity += 1;
                setCart(updatedCart);
            } else {
                // Si el producto no está en el carrito, agregarlo
                setCart([...cart, { ...product, quantity: 1 }]);
            }
        };

        const removeFromCart = (productId) => {
            setCart(cart.filter(item => item.id !== productId));
        };

        const clearCart = () => {
            setCart([]);
        };

        return (
            <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
                {children} {/* Los componentes hijos de CartProvider serán renderizados aquí */}
            </CartContext.Provider>
        );
    };

    // Validación de props para CartProvider
    CartProvider.propTypes = {
        children: PropTypes.node.isRequired, // Validamos que 'children' sea un nodo de React
    };
