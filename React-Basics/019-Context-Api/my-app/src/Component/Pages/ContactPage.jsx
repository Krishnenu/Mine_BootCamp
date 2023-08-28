import ThemeContext from "../../Contexts/ThemeContext";
import { useContext } from "react";
import AvailabiltyContext from "../../Contexts/availability-context";
const ContactPage=()=>{
     const {phone}=useContext(ThemeContext);
    //  const {availability}=useContext(AvailabiltyContext);

    return (
    <AvailabiltyContext.Consumer>
     {({availability,toggler})=>(
        <>
        <h1>Contact Page</h1>
        <p>{phone}</p>
        {availability?<p>available</p>:<p>not available</p>}
        </>
     )}
    </AvailabiltyContext.Consumer>
       
    )
}

export default ContactPage;