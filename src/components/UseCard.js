import { useState } from "react";


const UseCard = (props) => {
 const [count,setCount]=useState(0)
 const [count2,setCount2]=useState(1)
  
return (
    <div className="Use-Menu">
         <h1>count:{count}</h1> 
         <h1>count:{count2}</h1> 
        <h1>Name:{props.Name}</h1>
    </div>
  )

};


export default UseCard;