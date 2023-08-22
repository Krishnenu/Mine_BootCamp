import {createContext, useState} from 'react';

const AvailabiltyContext=createContext();


// Dynamic context making:
export const AvailabilityProvide=({children})=>{
const [isAvailable,setIsAvailable]=useState(false);
const toggleAvailable=()=>{
    setIsAvailable((preAvail)=>!preAvail);
}
const val={
    availability:isAvailable,
    toggler:toggleAvailable
}

return(
    <AvailabiltyContext.Provider value={val}>
        {children}
    </AvailabiltyContext.Provider>
)
}

// Provider and Consumer:

export default AvailabiltyContext;