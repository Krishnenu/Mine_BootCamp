import { useContext } from "react";
import MyContext from "../Contexts/Context";

const _AUTH="QpwL5tke4Pnpja7X4";

const HomePage=()=>{
    const contextdata=useContext(MyContext);
    return (
        <>
            { contextdata.map((user,index)=>{
                return(
                <>
                    <h1 key={index}>{user.id}---{user.name}-----{user.year}----{user.color}----{user.pantone_value}</h1>
                </>
                )
            })}
            {/* <div>{contextdata}</div> */}
            {console.log(contextdata)}
        </>
    )
}
export default HomePage;