import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { useParams } from "react-router-dom";


const Reastaruntmenu = () => {
    const [restMenu,setResMenu]=useState(null);

    const {resId} = useParams();

    useEffect (() => {
        fetchItem()
    },[]);

   const fetchItem=async() => {
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4520151&lng=78.3443565&restaurantId=+{256893}+&catalog_qa=undefined&submitAction=ENTER")
    const json=await data.json()
    console.log(json.data)
   

    setResMenu(json.data)
   };

if (restMenu === null) return <div><Shimmer/></div>

// const name=restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

const {name,cuisines,avgRating,costForTwo,sla}=restMenu?.cards[2]?.card?.card?.info
const {itemCards}=restMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
console.log(itemCards)
    return ( 
        <div>
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h2>Rs-{costForTwo/100}</h2>
            <h2>⭐{avgRating}</h2>
            <h4>  {sla.deliveryTime}Min</h4>
        

            <h1>Restaurent Menu</h1>
            <ul>
               {/* { itemList.map(res => <li key={res.card.info.id}>{res?.card?.info?.name} - {res?.card?.info?.price  }</li>)}
                <li>{restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards[0]?.card?.info?.name}</li> */}
               {/* { itemCards.map(res => <li className="menu-item" key={res?.card?.info?.id} >
                <strong>{res?.card?.info?.name}</strong> - Rs{(res?.card?.info?.price ||res?.card?.info?.defaultPrice)/100}
                <br/> 
                <span className="description">{res?.card?.info?.description}</span>
                </li>)}  */}
             {itemCards.map(res => (
    <li className="menu-item" key={res?.card?.info?.id}>
      <strong>{res?.card?.info?.name}</strong> - ₹{(res?.card?.info?.price || res?.card?.info?.defaultPrice) / 100}
      <br />
      <span className="description">{res?.card?.info?.description}</span>
    </li>
  ))}

            </ul>
        </div>
    )
};

export default Reastaruntmenu;