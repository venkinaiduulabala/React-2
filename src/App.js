import React  from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Reastaruntmenu from "./components/Reastaruntmenu";
//import Grocery from "./components/Grocery";
import { lazy ,Suspense } from "react";


const Grocery = lazy( () => import("./components/Grocery"))

const App = () =>{
   return(
   <div>
   <Header/>
   <Outlet/>
   </div>
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


