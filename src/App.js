import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Component Imports
import Fact from "./components/cat/Fact";
import GoodBoy from "./components/dog/GoodBoy";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";


function App() {
  const [catFacts, setCatFacts] = useState("");
  const [dogImage, setDogImage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function loginUser() {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={isLoggedIn ? 
         <HomeScreen /> : <LoginScreen logFunction={loginUser}/>} />

        <Route
          path="/cat"
          element={<Fact catFacts={catFacts} setCatFacts={setCatFacts} />}
        />
        <Route
          path="/dog"
          element={<GoodBoy dogImage={dogImage} setDogImage={setDogImage} />}
        />
      </Routes>
    </div>
  );
}

export default App;
