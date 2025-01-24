import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const mockItemDetails = {
    1: { name: 'Camiseta Lakers', description: 'Camiseta oficial de los Lakers', price: 30 },
    2: { name: 'Shorts Bulls', description: 'Shorts de los Bulls', price: 20 },
    3: { name: 'Gorra Celtics', description: 'Gorra oficial de los Celtics', price: 15 },
};

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {

        setItem(mockItemDetails[id]);
    }, [id]);

    return (
        <div>
            {item ? (
                <>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <p>Precio: ${item.price}</p>
                </>
            ) : (
                <p>Producto no encontrado.</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
