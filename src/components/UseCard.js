import { useState } from "react";


const UseCard = (props) => {
 const [count]=useState(0)
  
return (
    <div className="Use-Menu">
         <h1>count:{count}</h1> 
        <h1>Name:{props.Name}</h1>
    </div>
  )

};


export default UseCard;