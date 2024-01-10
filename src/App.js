import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Announcement from './Components/Announcement/Announcement';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Shop from './Pages/Shop';
import ProductDetails from './Pages/Products/ProductDetails';






function App() {
  
  return (
    <div>
      <Announcement />
      <Router>
        <Navbar />
        <div className='nav-links'>
          <Link to="/" className='link'>Home</Link>
          <Link to="/shop" className='link'>Shop</Link>
          <Link to="/about" className='link'>About Us</Link>
          <Link to="/contact" className='link '>Contact Us</Link>
        </div> 

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/> 
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route
                  path="/shop/:title"
                  element={<ProductDetails />}
                /> 
          
        </Routes>
      </Router>
     
  
    </div>
  );
}

export default App;
