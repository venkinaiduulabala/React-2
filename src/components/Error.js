import { useRouteError } from "react-router-dom";



const Error = () => {

    const Err=useRouteError()
    console.log(Err)
    return (
        <div>
            <h1>Oops! ....</h1>
            <h1>Some Thing Went Wrong!</h1>

            <h2>{Err.status}: {Err.statusText}</h2>
        </div>
    )
};

export default Error;