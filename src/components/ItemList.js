import { LOGO_URL } from "../utils/constants";


const ItemLIst = ({items}) => {
    console.log(items)
    return (
    <div >
    
        <h1>{items.map((item) => <div key={item.card.info.id} className="shadow-2xl  text-left my-4 p-2 border-b-2 border-gray-200 rounded-b-xl ">
           
           <div className=" flex p-2 justify-between 9/12 ">
            <div>
            <span className="font-bold"> {item.card.info.name}</span>
             <span>
            
                - ₹{item.card.info.defaultPrice/100 
                ? item.card.info.defaultPrice/100 
                : item.card.info.price/100 } 
             </span>
              <p className=" text-xs p-2">{item.card.info.description}</p>
              </div>
             <div className="w-25 h-auto py-4 3/12  ">
            <img className=" rounded-xl " src={LOGO_URL+ item.card.info.imageId}/>
            
                
               <div className=""> 
                <button className="border-solid border-black text-black bg-green-100 rounded-xl px-2.5 shadow-xl">Add ➕</button>
                </div>
           </div>
           </div>
          
            
            
            </div>  
    
    
    
    )}</h1>
       
       
    </div>
    )
};

export default ItemLIst;
