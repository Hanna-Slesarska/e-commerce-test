import CartItem from './CartItem';
import './cart.css';
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../Redux/CartSlice";
import ButtonToItems from '../ButtonsComponent/ButtonToItems';
import CheckoutButton from '../ButtonsComponent/CheckoutButton';

const Cart = () => {  

     const cartItem = useSelector(getCartItems);
     const totalPrice = useSelector(getTotalPrice)
    
    
    return ( 
        <div className='icon-cart'>
           
            {cartItem?.map((cartItem) =>  (
            <CartItem cartItem={cartItem} key={cartItem.id} /> 
            ))}
             
        
            <p className="totalPrice">{totalPrice === 0 ? 'You have no items in your shopping cart.'  : `Total: $${totalPrice.toFixed(2)}`}</p>
            {totalPrice === 0 ? <ButtonToItems />  : <CheckoutButton />}
            {/* {cartItem.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id}/>)}
             */}
        </div>
        
    )
}
export default Cart;