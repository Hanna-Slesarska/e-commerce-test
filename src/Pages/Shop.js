import AllCategories from "../Components/Filter/AllCategories"
import Footer from '../Components/Footer/Footer';
import Newsletter from '../Components/Newsletter/Newsletter';
import ProductList from './Products/ProductList'



const Shop = () => {
    return(
        <div>
            <div className="products">
                <div className="filter-block">
                    <AllCategories />
                </div>

                <div className='product-block' >
                    <ProductList />
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}
export default Shop;