import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext";
import AvailabiltyContext from "../../Contexts/availability-context";

const LandingPage = () => {
  const { name } = useContext(ThemeContext);
  const { toggler } = useContext(AvailabiltyContext);
  return (
    <>
        <h1>Landing Page</h1>
        <p>{name}</p>
        <button onClick={toggler}>Toggle Available</button>
    </>
  )
};

export default LandingPage;
