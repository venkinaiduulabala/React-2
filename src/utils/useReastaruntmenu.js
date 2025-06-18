import { useEffect, useState } from "react";
import { Menu_url } from "./constants";

const useReastaruntmenu = (resId) => {

const [restMenu, setRestMenu] = useState(null);

useEffect (() => {
    fetchData()
},[])

const fetchData = async() => {
const data = await fetch(Menu_url + resId);
const json= await data.json();
console.log(json.data);
setRestMenu(json.data);
}
    return restMenu;
}


export default useReastaruntmenu; 