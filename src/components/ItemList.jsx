import PropTypes from "prop-types";
import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <div className="itemContainer">
            {products.map((product) => (
                <div
                    key={product.id}
                    className={`item ${product.category}`}
                >
                    <Item key={product.id} product={product} />
                </div>
            ))}
        </div>
    );
};

ItemList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,  // Asegurarse de que la categoría esté incluida
        })
    ).isRequired,
};

export default ItemList;
