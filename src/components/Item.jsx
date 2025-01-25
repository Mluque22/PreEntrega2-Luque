import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
                src={product.img}
                alt={product.name}
                className="w-48 h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold text-center">{product.name}</h2>
            <p className="text-lg text-green-500 font-semibold mt-2">${product.price}</p>
            <Link
                to={`/item/${product.id}`}
                className="ver_detalle"
            >
                Ver Detalle
            </Link>
        </div>
    );
};

Item.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
    }).isRequired,
};

export default Item;
