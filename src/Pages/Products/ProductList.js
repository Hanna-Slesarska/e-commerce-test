import AllCategories from "../../Components/Filter/AllCategories"
import Footer from '../../Components/Footer/Footer';
import Newsletter from '../../Components/Newsletter/Newsletter';
import './products.css';
import { FaRegHeart } from "react-icons/fa";
import { popularProducts } from "../../Data/data";
import {Link } from 'react-router-dom';
//import ProductDetails from '../../Pages/Products/ProductDetails';


const ProductList = () => {
    return(
        <div>
            <div className="products">
                <div className="filter-container">
                    <AllCategories/>
                </div>
                <div className='product-container'>
                {popularProducts.map(product => (
                    <Link to={`/product/:id`}>
                    <div className="single-product-container" key={product.id}>
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
                </Link>
                
            ))} 
            
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}
export default ProductList;