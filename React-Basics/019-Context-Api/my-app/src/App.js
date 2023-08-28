import "./App.css";
import ContactPage from "./Component/Pages/ContactPage";
import LandingPage from "./Component/Pages/LandingPage";
import ThemeContext from "./Contexts/ThemeContext";
import { AvailabilityProvide } from "./Contexts/availability-context";

function App() {
  const prp = {
    name: "Lala",
    phone: "+91028736536",
  };

  return (
    <AvailabilityProvide>
      <ThemeContext.Provider value={prp}>
        <ContactPage />
        <LandingPage />
      </ThemeContext.Provider>
    </AvailabilityProvide>
  );
}

export default App;
