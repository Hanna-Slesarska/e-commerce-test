
import './products.css';
import { FaRegHeart } from "react-icons/fa";


const Product = ({product}) => {
    return (
        <div className="single-product-container" >
        <div className="circle"></div>
            <img className="product-img" src={`./${product.img}.png`}  alt="product"/>
        <div className="product-info">
            <div className="product-details">
                <p>{product.name}</p>
                <p>${product.price}</p>
            </div>
            <div className="icon">
                <FaRegHeart />
            </div>

        </div>
   
    
</div> 
    )
}
export default Product;