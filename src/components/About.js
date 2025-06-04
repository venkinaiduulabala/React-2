import UseClass from "./UseClass";
import UseCard from "./UseCard";


const About = () =>{
    return (
        <div>
        <h1>About Page</h1>
        <h2>From the About Page</h2>
     <UseCard Name={"This is from the Class based Component"}/>
        <UseClass Name={"This is from the Class Based Component"} contact={"from The App"}/>
        </div>


    )
};

export default About;