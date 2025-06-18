import useReastaruntmenu from "../utils/useReastaruntmenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";



const Reastaruntmenu = () => {
    
  const {resId} = useParams();

  const restMenu =useReastaruntmenu(resId)

if (restMenu === null) return <div><Shimmer/></div>

// const name=restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

const {name,cuisines,avgRating,costForTwo,sla}=restMenu?.cards[2]?.card?.card?.info
const {itemCards}=restMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
// const restaurantInfo = restMenu?.cards?.find(card => card?.card?.card?.info)?.card?.card?.info;

// const name = restaurantInfo?.name;
// const cuisines = restaurantInfo?.cuisines || [];
// const avgRating = restaurantInfo?.avgRating;
// const costForTwo = restaurantInfo?.costForTwo;
// const sla = restaurantInfo?.sla;

// const menuCards = restMenu?.cards?.find(card => card?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards;
// const itemCategory = menuCards?.find(c => c?.card?.card?.itemCards);
// const itemCards = itemCategory?.card?.card?.itemCards || [];

console.log(itemCards)
    return ( 
        <div>
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h2>Rs-{costForTwo/100}</h2>
            <h2>⭐{avgRating}</h2>
            <h4>  {sla?.deliveryTime}Min</h4>
        

            <h1>Restaurent Menu</h1>
            <ul>
               {/* { itemList.map(res => <li key={res.card.info.id}>{res?.card?.info?.name} - {res?.card?.info?.price  }</li>)}
                <li>{restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards[0]?.card?.info?.name}</li> */}
               {/* { itemCards.map(res => <li className="menu-item" key={res?.card?.info?.id} >
                <strong>{res?.card?.info?.name}</strong> - Rs{(res?.card?.info?.price ||res?.card?.info?.defaultPrice)/100}
                <br/> 
                <span className="description">{res?.card?.info?.description}</span>
                </li>)}  */}
             {/* {itemCards.map(res => (
    <li className="menu-item" key={res?.card?.info?.id}>
      <strong>{res?.card?.info?.name}</strong> - ₹{(res?.card?.info?.price || res?.card?.info?.defaultPrice) / 100}
      <br />
      <span className="description">{res?.card?.info?.description}</span>
    </li>
  ))} */}


  {itemCards?.length > 0 ? (
  itemCards.map(res => (
    <li className="menu-item" key={res?.card?.info?.id}>
      <strong>{res?.card?.info?.name}</strong> - ₹{(res?.card?.info?.price || res?.card?.info?.defaultPrice) / 100}
      <br />
      <span className="description">{res?.card?.info?.description}</span> 
    </li>
  ))
) : (
  <p>No menu items found for this restaurant.</p>
)}


            </ul>
        </div>
    )
};

export default Reastaruntmenu;