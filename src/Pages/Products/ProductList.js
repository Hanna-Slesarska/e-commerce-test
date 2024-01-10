
import './products.css';
import { popularProducts } from "../../Data/data";
import {Link } from 'react-router-dom';
//import Product from './Product';
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../Redux/productsSlice";
import { FaRegHeart } from "react-icons/fa";
import ProductDetails from './ProductDetails';




const ProductList = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return (
        <div className="product-test">
            
           {popularProducts.filter(product => {
                
                if (selectedCategory === 'View all') return true;
                return selectedCategory === product.category;
           }).map(product => (<Link  to={`/shop/${product.title}`}>
            <>
            <ProductDetails product={product} key={product.id}/>
           
           <div className="product-list"  >
                            
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
                               
                                {/* <Product product={product}/> */}
                            
                         </div> 
            </>
 </Link> 
            )
           
           )
 
          } 
                        
             
                       
                    
        </div>
                    
    
    )
}
export default ProductList;