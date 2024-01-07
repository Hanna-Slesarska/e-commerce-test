import { useState } from "react";
import { MdOutlinePersonOutline, MdOutlineShoppingBag,  MdSearch, MdClose } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { useSelector } from 'react-redux';
import { getTotalArticles } from '../../Redux/cartSlice';
import Cart from "../Cart/Cart";
import './navbar.css';


const Navbar = () => {
    const [cartContainer, setCartContainer] = useState(false);
    const openCart = () => {
        setCartContainer(!cartContainer)
    }

    const totalItems = useSelector(getTotalArticles);

    return (
        <div className="header-container">
            <div className="wrapper">
                <div className="left">
                    <div className="search">
                        <input placeholder="Search..." />
                        <MdSearch />
                    </div>
                </div>
                <div className="center">
                    <h1>Sophie.</h1>
                </div>
                <div className="right">
                    <div className="login-container">
                        <IoMdHeartEmpty className="navIcon" />
                    </div>
                    <div className="login-container"> 
                        <MdOutlinePersonOutline className="navIcon" />
                    </div>
                    <div className="cart-container" onClick={() => openCart()}>
                        <MdOutlineShoppingBag className="navIcon" />
                        {totalItems === 0 &&
                            <span onClick={() => openCart()} className='totalItemsCart'>{totalItems}</span>
                        }
                    </div> 
                </div>
            </div>
            <div  className='link-cart' onClick={() => openCart()}>
        {totalItems > 0 &&
               <span onClick={() => openCart()} className='totalItemsCart'>{totalItems}</span>
              }
          </div>
            <div className={cartContainer ? 'container-cart-true' : 'container-cart-false'}>
              <div className='box-close-cart'>
                <button className='btn-close-cart' onClick={() => openCart()}>
                    <i className='fas	fa-times'></i>
                </button>
            </div>
          <Cart/>
          
        </div>
            <div className={cartContainer ? 'container-cart-true' : 'container-cart-false'}>
                <div className='box-close-cart'>
                    <h2 className="box-close-title">Shopping Cart</h2>
                    <button className='btn-close-cart' onClick={() => openCart()}>
                        <MdClose />
                    </button>
                </div>
          <Cart/>
         
        </div>
        </div>)
}
export default Navbar; 

