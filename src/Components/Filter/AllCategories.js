import Filter from "./Filter";
import './filter.css';


const AllCategories = () => {
    return (<div className="cat">
        <h3 className="cat-title">Product Categories</h3>
            {['View all', 'Dress', 'Top', 'Purse', 'Shoes', 'Accessory', 'Jacket', 'Jeans'].map((category, index) => <Filter category={category} key={index}/>
        )}
    </div>)
}
export default AllCategories;