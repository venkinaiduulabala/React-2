
import { CDN_URL } from "../utils/constants";

const Header = () => {
   return (
      <div className="header">
        <div>
         <img alt="logo" className="logo" 
         src={CDN_URL} />
            </div>
           <div className="nav-bar">
         <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Cart</li>
            
         </ul>
         </div>
        </div>
   
   )
};



export default Header;