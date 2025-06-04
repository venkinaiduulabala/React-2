import React from "react";

class UseClass extends React.Component{
     constructor (props){
        super(props)
    this.state = {
        count : 1,
    };

     };

        render () {
const {Name, contact}=this.props
// const {count}=this.state
            return(
               <div className="Use-Menu">
                <h1>counts:{this.state.count}</h1> 
                <h1>Name:{Name}</h1>
                <h2>Contact:{contact}</h2>
               </div>
        )
        };     
};


export default UseClass;