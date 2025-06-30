import ItemLIst from "./ItemList";
import { useState } from "react";

const ListMenu = ({data}) => {

 const [showItem, setShowItems] = useState(false)

 const handleClick = () => {
    setShowItems(!showItem)
 }

    return(
       
        <div className="p-2  w-10/12 mx-auto my-2 rounded-lg border-solid shadow-2xl bg-gray-100 bg-hover-gray-200 ">
             <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <h1 className="font-bold text-lg   ">{data.title} ({data?.itemCards?.length})</h1>
            <samp>⬇️</samp>
            
           </div>
        
              <span className="text-center">
              { showItem  && <ItemLIst items={data.itemCards}/>}
                </span>
            
        </div>
    )
};


export default ListMenu;