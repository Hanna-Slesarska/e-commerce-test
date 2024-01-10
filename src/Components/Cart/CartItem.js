import './cart.css';
import {  useDispatch } from "react-redux";
import { removeFromCart } from '../../Redux/CartSlice';
import { MdDelete } from "react-icons/md";
import { popularProducts } from '../../Data/data'

const CartItem = ({cartItem}) => {
    
     const items = popularProducts.find(item => item.id === cartItem.productId)
     console.log(items)
     const dispatch = useDispatch()
   return (
    <div>
        cartitem
        {/* <img src={`./${items.img}.jpg`} className="cartItem-img" width="50px" hight="20px" alt="item"/> */}
            <div className="box1-cartItem">
                <p className="cartItem-name">{items.name}</p>
                <div className="box2-cartItem">
                    <p className="cartItem-quantity-price">{items.quantity} portion(s)</p>
                    <p className="cartItem-quantity-price cartItem-price">Price: ${(items.price * cartItem.quantity).toFixed(2)}</p>
                </div>
                <div onClick={() => {dispatch(removeFromCart({cartItemId: cartItem.id}))}}>
                    <MdDelete />
                </div>
            </div>
    </div>
   )
    
}
export default CartItem;