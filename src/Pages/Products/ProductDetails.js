
import ChangeQuantity from "../../Components/Cart/ChangeQuantity";
import { useState } from "react";
import { popularProducts } from "../../Data/data";
import { useParams, useNavigate } from "react-router-dom";
import './products.css';
// import Newsletter from "../../Components/Newsletter/Newsletter";
// import Footer from "../../Components/Footer/Footer";
import { MdArrowBackIosNew } from "react-icons/md";
import { addToCart } from "../../Redux/CartSlice";
import { useDispatch } from "react-redux";



const ProductDetails = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    
    
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const { title } = useParams();

    return(<div>
        {popularProducts.filter((product) => product.title === title).map(elem => {
            return(
                <div className="details-container" key={elem.id}>
                    <div className="product-details-wrapper" >
                        <div className="img-details-container">
                            <img className="prod-details-img" src={`../${elem.img}.png`} alt="product"/> 
                        </div>
                        <div className="product-details-container">
                            <h2 className="product-details-title">{elem.name}</h2>
                            <p className="product-details-desc">{elem.desc}</p>
                            <span className="product-details-price">${elem.price}</span>
                            <div className="sort-container">
                                <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
                            </div>
                            <div className="add-container">
                                <button onClick={() => {dispatch(addToCart({elem, quantity}))}} className="add-cart-btn">ADD TO CART</button>
                            </div>  
                        </div>
                        </div>
                    </div>
                    
            )})
        }


        
         
         
        <button className="go-back" onClick={() => navigate(-1)}>
            <MdArrowBackIosNew />  Back
        </button>
      
    </div>
            

    )
}
export default ProductDetails;