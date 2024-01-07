import Filter from "./Filter";


const AllCategories = () => {
    return (<div>
        <h3>Product Categories</h3>
            {['View all', 'Dress', 'Top', 'Purse', 'Shoes', 'Accessory', 'Jacket', 'Jeans'].map(category => <Filter category={category}/>
        )}
    </div>)
}
export default AllCategories;