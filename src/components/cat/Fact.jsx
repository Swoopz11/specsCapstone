import React from "react";
import axios from "axios";
import Header from "../Headers/Header";

function Fact({ catFacts, setCatFacts }) {
  let display = catFacts;

  function displayCatFact() {
    axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.data.fact);
      setCatFacts(res.data.fact);
    });
  }

  return (
    <div>
      <Header />
      <div className="fact-container">
        <button className="fact" onClick={displayCatFact}>
          Get Random Fact About Cats
        </button>
        <h3>{display}</h3>
      </div>
    </div>
  );
}

export default Fact;
