import { useEffect, useState } from "react";

const _AUTH="QpwL5tke4Pnpja7X4";
const HomePage=({sendUserData})=>{
    return (
        <>
        {sendUserData.map((user,index)=>{
            return(
                <>
                <h1 key={index}>{user.id}---{user.name}-----{user.year}----{user.color}----{user.pantone_value}</h1>
            </>
            )
        })}
        </>
    )
}
export default HomePage;