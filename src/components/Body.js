
import Restocard from "./Restocard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
   const [restarentLlist  , setRestarentList] = useState( [] )
    const [serchText,setSerchtask]=useState('')
    const [filteredRestro, setFilteredReestro] =useState([])
   
    useEffect (() => {
    fetchData()

  }, [])

  const fetchData = async () => {
   const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4520253&lng=78.3742678&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
   const json=await data.json();

   //console.log(json)


   const filteData=json.data.cards.filter(
      eachElement => eachElement.card.card.hasOwnProperty ("info")
   )
  
   setRestarentList(filteData)
   setFilteredReestro(filteData)
   //setRestarentData(json?.data?.cards[4]?.card?.card?.cards)    
   }

if (restarentLlist.length === 0) {
      return <h1><Shimmer/></h1>;

}


console.log("Body Rendered")

   return(
      <div>
         <div className="search">
            <input
            type="text"
            placeholder="Search bar"
         value={serchText}
         onChange={(e) => {
           setSerchtask(e.target.value)
         }}
             />
            <button onClick={ () => { 
               const filteredRestarunt= restarentLlist.filter((resta)=> {
                return  resta?.card?.card?.info?.name?.toLowerCase()?.includes(serchText?.toLowerCase())
               })
               setFilteredReestro(filteredRestarunt)
               console.log(filteredRestarunt)
            }} >search</button>




            <button className="filter" 
            onClick= { () =>{

             const UpdateData =restarentLlist.filter((res) => res.card.card.info.avgRating >= 4.2)
                      setRestarentList(UpdateData)
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
            filteredRestro.map((restarent) => 
               (<Restocard resdata={restarent} 
                  key={restarent.card.card.info.id}/>))
           }
           
         </div>
   
      </div>
   )
};




export default Body;