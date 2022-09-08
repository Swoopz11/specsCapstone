import React from "react";
import axios from "axios";
import Header from "../Headers/Header";

function GoodBoy({ dogImage, setDogImage }) {
  let display = dogImage;

  function doggiePic() {
    axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      console.log(res.data.message);
      setDogImage(res.data.message);
    });
  }

  return (
    <div>
      <Header />
      <div className="doggie-container">
        <button className="doggie" onClick={doggiePic}>
          Click to see a Good Boy/Good Girl
        </button>
        <img className="dog-pic" src={display} alt="dog" />
      </div>
    </div>
  );
}

export default GoodBoy;
