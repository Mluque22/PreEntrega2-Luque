import PropTypes from "prop-types";

const ItemCount = ({ stock, quantity, onAdd }) => {
    const handleAdd = () => {
        if (quantity < stock) {
            onAdd(quantity + 1);
        }
    };

    const handleRemove = () => {
        if (quantity > 1) {
            onAdd(quantity - 1);
        }
    };

    return (
        <div className="item-count">
            <button onClick={handleRemove} className="btn btn-secondary">-</button>
            <span>{quantity}</span>
            <button onClick={handleAdd} className="btn btn-secondary">+</button>
            <p>Stock disponible: {stock}</p>
        </div>
    );
};

ItemCount.propTypes = {
    stock: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default ItemCount;
