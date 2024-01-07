import './cart.css';
import {  useDispatch } from "react-redux";
import { removeItemFromCart } from '../../Redux/cartSlice';
import { MdDelete } from "react-icons/md";
import { popularProducts } from '../../Data/data'

const CartItem = ({cartItem}) => {
    const product = popularProducts.find(item => item.id === cartItem.productId)
    const dispatch = useDispatch()
    return (
            <div className='cartItems-container'>
            <img src={`${product.img}.jpg`} className="cartItem-img" width="50px" hight="20px" alt="dish"/>
            <div className="box1-cartItem">
                <p className="cartItem-name">{product.name}</p>
                <div className="box2-cartItem">
                    <p className="cartItem-quantity-price">{cartItem.quantity} portion(s)</p>
                    <p className="cartItem-quantity-price cartItem-price">Price: ${(product.price * cartItem.quantity).toFixed(2)}</p>
                </div>
            </div>
            <div onClick={() => {dispatch(removeItemFromCart({cartItemId: cartItem.id}))}}>
            <MdDelete />
            </div>
            
           
    </div>
    )
}
export default CartItem;