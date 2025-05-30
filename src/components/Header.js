
import { CDN_URL } from "../utils/constants";
import { useEffect, useState } from "react";


const Header = () => {
   const [btnupdate, setBtnupdate] = useState("Login")
console.log("Header Rendered")


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