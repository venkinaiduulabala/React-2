import { useDispatch, useSelector } from "react-redux"
import ItemLIst from "../components/ItemList"
//import { clearCart } from "./cartSlice"
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";


const Cart = () => {
    
  const cartItems = useSelector((store) => store.cart.items)

  const dispatch = useDispatch();

   const onClear = () => {
     dispatch(clearCart());
   };

   const onRemove = () => {
    dispatch(removeItem())
   }

    return (
      <div className="text-center m-2 p-2 text-2xl ">
       <h1 className=" font-bold">Cart</h1>
      <div className="flex justify-center">
       <h1 className="p-2 m-2 bg-black border-2 text-white rounded-2xl " onClick={onClear}>Clear cart</h1>
       <h1 className="p-2 m-2  bg-black border-2 text-white rounded-2xl" onClick={onRemove}>Remove Item</h1>
       </div>
        <div className="w-8/12 m-auto ">
          <ItemLIst  items={cartItems}/>
        </div>
      </div>
    )
}

export default Cart