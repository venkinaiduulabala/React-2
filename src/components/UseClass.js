import React from "react";

class UseClass extends React.Component{
     constructor (props){
        super(props)
    this.state = {
        count : 1,
        count2 : 2
    };
    
     };


    async componentDidMount () {
      const data=await fetch("")
      const json=await data.json()
      
     }

        render () {
const {Name, contact}=this.props
const {count,count2}=this.state

      
            return(
               <div className="Use-Menu">
                <h1>counts:{count}</h1> 
                <button onClick={ () => {
                    this.setState({
                      count:this.state.count + 1  
                    })
                }}>Count Increase</button>
                <h1>counts:{count2}</h1> 
                <button onClick={() => {
                    this.setState({
                        count2:this.state.count2 -1
                    })
                }}>decreae</button>

                <h1>Name:{Name}</h1>
                <h2>Contact:{contact}</h2>
               </div>
        )
        };      
};


export default UseClass;