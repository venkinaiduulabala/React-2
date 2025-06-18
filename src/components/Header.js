
import { CDN_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
   const [btnupdate, setBtnupdate] = useState("Login")

  const OnlineStatus = useOnlineStatus();

   return (
      <div className="header">
        <div>
         <img alt="logo" className="logo" 
         src={CDN_URL} />
            </div>
           <div className="nav-bar">
         <ul>
            <li>
               Online Status : {OnlineStatus ? "✅"  : "🔴" }
            </li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/">Cart</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>

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