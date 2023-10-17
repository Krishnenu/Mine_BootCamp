import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import "./App.css";
import { useState } from "react";

function App() {
  const [userData,setUserData]=useState([]);
  const sendUserData=(data)=>{
    setUserData(data);
  }
  return (    
    <Routes>
      <Route path="/" element={<LoginPage getUserData={(data)=>sendUserData(data)} sendUserData={userData}/> } />
      <Route path="/home" element={<HomePage/>} />
    </Routes>
  );
}

export default App;
