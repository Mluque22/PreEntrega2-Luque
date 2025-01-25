import PropTypes from 'prop-types';

const ItemDetail = ({ product }) => {
    if (!product) {
        return <p className="text-center">Cargando detalles del producto...</p>;
    }

    return (
        <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
            <img
                src={product.img}
                alt={product.name}
                className="w-64 h-64 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
            <p className="text-gray-500 text-lg mt-2">{product.description}</p>
            <p className="text-lg mt-2">
                <span className="font-bold">Categoría:</span> {product.category}
            </p>
            <p className="text-lg mt-2">
                <span className="font-bold">Precio:</span> ${product.price}
            </p>
            <p className="text-lg mt-2">
                <span className="font-bold">Stock disponible:</span> {product.stock}
            </p>
            <button className="agregar_al_carrito">
                Agregar al carrito
            </button>
        </div>
    );
};

ItemDetail.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    }),
};

export default ItemDetail;
