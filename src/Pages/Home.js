import Slider from '../Components/Slider/Slider';
import { sliderItems } from "../Data/data";
import Trends from '../Components/Trends/Trends';
import Newsletter from '../Components/Newsletter/Newsletter';
import Footer from '../Components/Footer/Footer';

const Home = () => {
    return(
        <div>
            <Slider sliderItems={sliderItems}/>
            <Trends />
            <Newsletter />
            <Footer />
        </div>
    )
}
export default Home;