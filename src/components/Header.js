
import { CDN_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
   const [btnupdate, setBtnupdate] = useState("Login")



   return (
      <div className="header">
        <div>
         <img alt="logo" className="logo" 
         src={CDN_URL} />
            </div>
           <div className="nav-bar">
         <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/">Cart</Link></li>

            <button className="login_btn" onClick={() => {
               btnupdate === "Login"
                  ? setBtnupdate("Logout" ) 
                  : setBtnupdate("Login" )
               console.log(btnupdate)
            }
          
            }>{btnupdate}</button>
            
         </ul>
         </div>
        </div>
   
   )
};



export default Header;