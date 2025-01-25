import PropTypes from "prop-types";
import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <div
                    key={product.id}
                    className={`item ${product.category}`}  /* Aplicar clase específica según la categoría */
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
