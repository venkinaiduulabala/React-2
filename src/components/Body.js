
import Restocard from "./Restocard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../utils/useOnlineStatus";

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
  
   setRestarentList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   setFilteredReestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   };

   
const OnlineStatus = useOnlineStatus();

if (OnlineStatus === false)
   return (
   <h1>
      404 ! OPPS   chehck your Internet Connection
      s</h1>
   );

if (restarentLlist.length === 0) {
   return<h1><Shimmer/></h1>;  
};

   return(
      <div className="bg-red-50">
         <div >
            <input
            type="text"
            placeholder="Search bar"
         value={serchText}
         onChange={(e) => {
           setSerchtask(e.target.value)
         }} className="border shadow-lg p-2 m-2 rounded-md "
             />
            <button onClick={ () => { 
               const filteredRestarunt= restarentLlist.filter((resta)=> {
                return  resta?.info?.name?.toLowerCase()?.includes(serchText?.toLowerCase())
               })
               setFilteredReestro(filteredRestarunt)
               console.log(filteredRestarunt)
            }} className="border p-2 rounded-md px-2">search</button>
            <button className="border p-2 rounded-md px-2 m-2" 
            onClick= { () =>{

             const UpdateData =restarentLlist.filter((res) => res?.info?.avgRating >= 4.2)
                      setFilteredReestro(UpdateData)
               console.log(UpdateData)
            }} >
            Filter Rating </button>
         </div>
         <div className="flex flex-wrap ">

           {
            filteredRestro.map((restarent) => 
               (<Link to={"/restaurents/" + restarent?.info?.id }  key={restarent?.info?.id}>
                  <Restocard resdata={restarent} /></Link>)) }
           
         </div>
   
      </div>
   )
};




export default Body;