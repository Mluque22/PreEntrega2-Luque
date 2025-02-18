import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <Link to={`/item/${product.id}`} className="btn btn-primary">
                    Ver más
                </Link>
            </div>
        </div>
    );
};

Item.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default Item;
