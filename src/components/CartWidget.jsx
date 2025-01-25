import { BsCart4 } from "react-icons/bs";

const cartItems = 5;
const CartWidget = () => {
    return (
        <div><BsCart4 fontSize={'1.5rem'} />
            <span style={{ marginLeft: '8px', fontWeight: 'bold' }}>{cartItems}</span>
        </div>
    )
}
export default CartWidget;