import React  from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Reastaruntmenu from "./components/Reastaruntmenu";
import { Provider } from "react-redux";
import { lazy ,Suspense } from "react";
import Footer from "./components/Footer";
import appStore from "./utils/appStore";
import Cart from "./utils/Cart.js";


const Grocery = lazy( () => import("./components/Grocery"))

const App = () =>{
   return(
  <Provider store={appStore}>
  <div>
   <Header/>
   <Outlet/>
   <Footer />
   </div>
   </Provider>
   )
}



const appRouter = createBrowserRouter(
   [
      {
         path: "/",
         element:<App/>,
         children: [
            {
               path   :"/",
               element:<Body/>
            },
            {
         path: "/about",
         element:<About/>,
      },
      {
         path: "/contact",
         element:<Contact/>,
      },
      {
         path: "/cart",
         element:<Cart/>,
      },
      {
         path: "/grocery",
         element:<Suspense fallback={<h1>Loading.....</h1>}> <Grocery /></Suspense>,
        
      },
      {
         path: "/restaurents/:resId",
         element:<Reastaruntmenu/>,
      },
         ],
         errorElement:<Error/>
      },
   ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);


