
   import React from "react";
   import ReactDOM from "react-dom/client";



const heading=React.createElement("div", {id:"parent"}, 
    

    React.createElement("div", {id:"child"},[
        [React.createElement("h1", {key:"h1"}, "i am from the root🚀 "),
            React.createElement("h2", {key:"h2"}, "i am from h2")
        ]

   ] )  
    
);



const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)
