
import { CDN_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
   const [btnupdate, setBtnupdate] = useState("Login")

  const OnlineStatus = useOnlineStatus();

   return (
      <div className="flex justify-between border border-solid  items-center rounded-md bg-gray-100 shadow-lg sm:bg-amber-100 lg:bg-amber-200 xl:bg-gray-200">
        <div>
         <img alt="logo" className="w-24 h-24 p-2 rounded-md" 
         src={CDN_URL} />
            </div>
           <div >
         <ul className="flex display-flex justify-between ">
            <li className="px-2">
               Online Status : {OnlineStatus ? "✅"  : "🔴" }
            </li>
            <li className="px-2"><Link to='/'>Home</Link></li>
            <li className="px-2"><Link to='/contact'>Contact Us</Link></li>
            <li className="px-2"><Link to="/about">About Us</Link></li>
            <li className="px-2"><Link to="/">Cart</Link></li>
            <li className="px-2"><Link to="/grocery">Grocery</Link></li>

            <button className="px-2" onClick={() => {
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