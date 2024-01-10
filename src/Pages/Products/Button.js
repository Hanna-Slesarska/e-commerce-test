import { addToCart } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";

const Button =({items, quantity})=> {

    const dispatch = useDispatch();

    return (
        <div className="add-container">
            <button onClick={() => (dispatch(addToCart({items, quantity})))} className="add-cart-btn">ADD TO CART</button>
        </div>
    )
}
export default Button;