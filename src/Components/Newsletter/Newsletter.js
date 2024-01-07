import { MdOutlineSend } from "react-icons/md";
import './newsletter.css';

const Newsletter = () => {
    return (
        <div className="newsletter-container">
            <h2 className="newsletter-title">Newsletter</h2>
            <p className="newsletter-desc">Get timely updates from your favorite products.</p>
            <div className="input-container">
                <input className="news-input"
                placeholder="Your email"/>
                <button className="news-btn">
                    <MdOutlineSend />
                </button>
            </div>
        </div>
    )
}
export default Newsletter;