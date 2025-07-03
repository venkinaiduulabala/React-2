import { useSelector } from "react-redux"
import ItemLIst from "../components/ItemList"

const Cart = () => {
    
  const cartItems = useSelector((store) => store.cart.items)
    return (
      <div className="text-center m-2 p-2 text-2xl ">
       <h1 className=" font-bold">Cart</h1>
        <div className="w-8/12 m-auto ">
          <ItemLIst  items={cartItems}/>
        </div>
      </div>
    )
}

export default Cart