import useReastaruntmenu from "../utils/useReastaruntmenu";
import ListMenu from "./ListMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";



const Reastaruntmenu = () => {
    
  const {resId} = useParams();

  const restMenu =useReastaruntmenu(resId)

if (restMenu === null) return <div><Shimmer/></div>

const {name,cuisines,avgRating,costForTwo,sla}=restMenu?.cards[2]?.card?.card?.info
const {itemCards}=restMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

const recomded= restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")




    return ( 
        <div className="p-2 m-4  rounded-lg border-solid shadow-2xl bg-gray-100 bg-hover-gray-200 ">
            <h2 className="font-bold text-2xl text-center">{name}</h2>
            <div className="text-lg border-solid shadow-lg bg-gray-200 p-2 m-2 rounded-lg">
            <h3>{cuisines.join(",")}</h3>
            <h2>Rs-{costForTwo/100}</h2>
            <h2>⭐{avgRating}</h2>
            <h4>  {sla?.deliveryTime}Min</h4>
             </div>

            <h1 className="font-bold text-xl text-center">Restaurent Menu</h1>

        {/*** Accordion  catagories */}
         {recomded.map((recomded) => 
         <ListMenu key={recomded?.card?.card?.categoryId} 
          data={recomded?.card?.card} 
          showItem={false}/> )}

            
          

        </div>
    )
};

export default Reastaruntmenu;