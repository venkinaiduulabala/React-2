import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [OnlineStatus , setOnlineStatus] = useState(true);
  
useEffect (() => {
    window.addEventListener("offLine", () => {
        setOnlineStatus(false)
    });
  
    window.addEventListener("online", () => {
        setOnlineStatus(true)
    });
   }, [])

   return OnlineStatus;
}


export default useOnlineStatus;