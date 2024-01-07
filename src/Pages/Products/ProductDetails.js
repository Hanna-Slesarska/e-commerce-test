import { styled } from "styled-components"
import ChangeQuantity from "../../Components/Cart/ChangeQuantity";
import { useState } from "react";
import { popularProducts } from "../../Data/data";




const SortColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
margin: 0px 5px;
cursor: pointer;
`

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    
    const product = popularProducts.filter(
        (product) => product === product.id
    );
    

    return(
            <div className="product-container" >
            
                <div className="product-wrapper" >
                    <div className="img-container">
                        <img className="prod-img" src={`./${product.id}.png`} alt="product"/> 
                    </div>
                    <div className="product-info-cont">
                        <h2 className="product-title">{product.idname}</h2>
                        <p className="product-desc">{product.iddesc}</p>
                        <span className="product-price">${product.idprice}</span>
                        <div className="sort-container">
                            <div className="sort">
                                <p className="sort-title">Color:</p>
                                <SortColor color="black"/>
                                <SortColor color="darkblue"/>
                                <SortColor color="gray"/>
                            </div>
                            <div className="sort">
                                <p className="sort-title">Size</p>
                                <select>
                                    <option>XS</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                            </div>
                    
                        </div>
                        <div className="add-container">
                            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} /> 
                            <button className="add-cart-btn">ADD TO CART</button>
                        </div>
                    </div>
        </div>
        
    </div>

    )
}
export default ProductDetails;