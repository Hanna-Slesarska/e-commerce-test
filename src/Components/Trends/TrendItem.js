import './trends.css';

const TrendItem = ({item}) => {
    return (
        <div className="item-container">
            <img className="category-img" src={item.img} alt="trend-img"/>
            <div className="info-cat">
                <h3 className="category-title">{item.title}</h3>
                <button className="category-btn">SHOP NOW</button>
            </div>
            
        </div>
    )
}
export default TrendItem;