import { LOGO_URL } from "../utils/constants";


const Restocard = (props) => {
   const {resdata}=props
    const {name,cuisines,avgRating,cloudinaryImageId} =resdata.card.card.info
    const {deliveryTime} =resdata.card.card.info.sla
   return (
      <div className="resto-card">
         <img className="food-Img" alt="food-Img" 
         src={LOGO_URL +cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{deliveryTime} Min</h4>
            <h4>{avgRating} Rating</h4>
         </div>
   )
};



export default Restocard;