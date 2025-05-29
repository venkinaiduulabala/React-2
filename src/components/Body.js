
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
   const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.464547&lng=78.3396928&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");
   const json=await data.json();

   console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


   // const filteData=json.data.cards.filter(
   //    eachElement => eachElement.card.card.hasOwnProperty ("info")
   // )
  
   setRestarentList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   setFilteredReestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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
                return  resta?.info?.name?.toLowerCase()?.includes(serchText?.toLowerCase())
               })
               setFilteredReestro(filteredRestarunt)
               console.log(filteredRestarunt)
            }} >search</button>




            <button className="filter" 
            onClick= { () =>{

             const UpdateData =restarentLlist.filter((res) => res?.info?.avgRating >= 4.2)
                      setFilteredReestro(UpdateData)
               console.log(UpdateData)
            }}    >

                      
           

            
            Filter Rating </button>
         </div>
         <div className="res-card">

           {
            filteredRestro.map((restarent) => 
               (<Restocard resdata={restarent} 
                  key={restarent?.info?.id}/>))
                  
           }
           
         </div>
   
      </div>
   )
};




export default Body;