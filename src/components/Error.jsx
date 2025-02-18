import PropTypes from "prop-types";  // Asegúrate de importar PropTypes correctamente

const Error = ({ message }) => {
    return (
        <div className="error-message">
            <p>{message || 'Algo salió mal. Intenta nuevamente más tarde.'}</p>
        </div>
    );
};

Error.propTypes = {
    message: PropTypes.string,  // Hacemos que 'message' sea una prop opcional
};

export default Error;
