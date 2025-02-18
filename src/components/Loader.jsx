import PropTypes from "prop-types";

const Loader = ({ loading }) => {
    if (!loading) return null;

    return (
        <div className="loader">
            <p>Loading...</p>
        </div>
    );
};

Loader.propTypes = {
    loading: PropTypes.bool.isRequired,
};

export default Loader;
