import React from "react";
import Header from "../components/Headers/Header";

function HomeScreen() {
  return (
    <div>
      <Header />
      <div className="homescreen">
        <h2>Welcome to A Good Distraction!</h2>
        <h4>
          Click the buttons to the upper right to become blissfully distracted
        </h4>
      </div>
    </div>
  );
}

export default HomeScreen;
