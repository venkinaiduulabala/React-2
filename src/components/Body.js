import resList from "../utils/mockData";
import Restocard from "./Restocard";
import { useState } from "react";


const Body = () => {
   const [restarentLlist  , setRestarentData] = useState (resList)
   return(
      <div>
         <div className="search">
            <input
            type="search"
            placeholder="Search bar"
            required
            />
            <button>search</button>

            <button className="filter" 
            onClick= { () =>{

             const UpdateData =restarentLlist.filter((res) => res.card.card.info.avgRating >= 4)
                      setRestarentData(UpdateData)
               // restarentLlist=restarentLlist.filter(
               //    (res) => res.card.card.info.avgRating > 4 
               // );
               // console.log(restarentLlist)
            }}    >

                      
               {/* resList = resList.filter((res) = {res.data.avgRating > 4})
              
               resList=resList.filter(
              (res) => res.data.avgRating > 4) */}

            
            Filter Rating </button>
         </div>
         <div className="res-card">

            
         
           {
            restarentLlist.map((restarent) => (<Restocard resdata={restarent} key={restarent.card.card.info.id}/>))
           }
           
         </div>
   
      </div>
   )
};




export default Body;