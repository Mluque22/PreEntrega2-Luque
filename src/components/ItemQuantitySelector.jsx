import { useState } from "react";
import PropTypes from "prop-types";

const ItemQuantitySelector = ({ initialQuantity = 1, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        onQuantityChange(quantity + 1); // Llamamos a onQuantityChange para propagar el cambio
    };

    const decreaseQuantity = () => {
        const newQuantity = Math.max(1, quantity - 1); // Evitar cantidades negativas
        setQuantity(newQuantity);
        onQuantityChange(newQuantity); // Llamamos a onQuantityChange para propagar el cambio
    };

    const handleChange = (e) => {
        const newQuantity = Math.max(1, parseInt(e.target.value, 10)); // Aseguramos que la cantidad no sea menor a 1
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);
    };

    return (
        <div className="quantity-selector">
            <button className="quantity-button decrease" onClick={decreaseQuantity}>-</button>
            <input
                className="quantity-input"
                type="number"
                value={quantity}
                onChange={handleChange}
                min="1"
            />
            <button className="quantity-button increase" onClick={increaseQuantity}>+</button>
        </div>
    );
};

ItemQuantitySelector.propTypes = {
    initialQuantity: PropTypes.number, // Propiedad opcional para la cantidad inicial
    onQuantityChange: PropTypes.func.isRequired, // Función para manejar el cambio de cantidad
};

export default ItemQuantitySelector;
