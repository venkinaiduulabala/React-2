import { LOGO_URL } from "../utils/constants";


const Restocard = (props) => {
   const {resdata}=props
    const {name,cuisines,avgRating,cloudinaryImageId} =resdata?.info
    const {deliveryTime} =resdata?.info?.sla
    
   return (
      <div className=" shadow-lg p-2 m-2 rounded-md border border-solid  hover:bg-gray-200 w-[270px] bg-gray-50">
         <img className=" justify-content-center rounded-md " alt="food-Img" 
         src={LOGO_URL + cloudinaryImageId}/>
            <h3 className="font-bold py-2">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{deliveryTime} Min</h4>
            <h4>{avgRating} Rating</h4>
         </div>
   )
};

export default Restocard;