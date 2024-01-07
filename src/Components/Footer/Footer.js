import { FaInstagram, FaFacebook, FaPinterest, FaTiktok, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import './footer.css';

const Footer = () => {
    return (
        <div>
        <div className="footer-container">
            <div className="footer-left">
                <h2 className="footer-left-title">Sophie.</h2>
                <p className="footer-desc">Random text to see how it looks on my webpage.</p>
                <div className="social-container">
                    <FaInstagram className="social-icon" />
                    <FaFacebook className="social-icon"/>
                    <FaYoutube className="social-icon"/>
                    <FaPinterest className="social-icon"/>
                    <FaTiktok className="social-icon"/>
                </div>
            </div>
            <div className="footer-center">
                <h4 className="footer-title">Useful Links</h4>
                <ul className="footer-list">
                    <li className="footer-listItem">Home</li>
                    <li className="footer-listItem">My Account</li>
                    <li className="footer-listItem">Customer Servise</li>
                    <li className="footer-listItem">Order Tracking</li>
                    <li className="footer-listItem">Legal & Privacy</li>
                </ul>
            </div>
            <div className="footer-right">
                <h4 className="footer-title">Contact Us</h4>
                <ul className="footer-list">
                    <li className="footer-listItem"><FaMapMarkerAlt /> 1123 Main Street</li>
                    <li className="footer-listItem"><MdEmail /> Email: contact@sophie.com</li>
                    <li className="footer-listItem"><MdLocalPhone /> + 1 234 567 78 00</li>
                </ul>
                <img className="payment" src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment" />
            </div>
            
        </div>
        <div className="footer-bottom">
            <hr></hr>
                <p>Developed with love by Hanna Slesarska</p>
                <p>For educational purposes</p>
            </div>
        </div>
    )
}
export default Footer;