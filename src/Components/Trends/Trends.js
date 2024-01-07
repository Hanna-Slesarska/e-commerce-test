import { trends } from "../../Data/data";
import TrendItem from "./TrendItem";
import './trends.css';

const Trends = () => {
    return (
        <div className="category-container">
            {trends.map(item => (
            <TrendItem item={item} key={item.id}/>
        ))} 
        </div>
    )
}
export default Trends;