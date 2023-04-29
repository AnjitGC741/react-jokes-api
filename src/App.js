import { useEffect, useState } from "react";
import programming from "../src/img/programming.png";
import santaClaus from "../src/img/santaClaus.png";
import scream from "../src/img/scream.png";
import shuffle from "../src/img/shuffle.png";
import voodooDoll from "../src/img/voodooDoll.png";
import img1 from "../src/img/img1.png";
import img2 from "../src/img/img2.png";
import "./App.css";
function App() {
  const [type, setType] = useState(["Any"]);
  const [jokes, getJokes] = useState([]);
  const fetchJokes = () => {
    fetch(`https://v2.jokeapi.dev/joke/${type ? type : "Any"}`)
      .then((response) => response.json())
      .then((data) => getJokes(data));
  };
  useEffect(() => {
    fetchJokes();
  }, [type]);
  const handleOptionChange = (event) => {
    setType(event.target.value);
  };
  return (
    <div className="main-div">
      <div className="category-section">
        <h3>Select Category</h3>
        <form>
          <input
            type="radio"
            name="jokesType"
            value="Programming"
            onChange={handleOptionChange}
          />
          <label>
            <img src={programming} className="img-icon" />
          </label>
          <input
            type="radio"
            name="jokesType"
            value="Misc"
            onChange={handleOptionChange}
          />
          <label>
            <img src={shuffle} className="img-icon" />
          </label>
          <input
            type="radio"
            name="jokesType"
            value="Dark"
            onChange={handleOptionChange}
          />
          <label>
            <img src={voodooDoll} className="img-icon" />
          </label>
          <input
            type="radio"
            name="jokesType"
            value="Spooky"
            onChange={handleOptionChange}
          />
          <label>
            <img src={scream} className="img-icon" />
          </label>
          <input
            type="radio"
            name="jokesType"
            value="Christmas"
            onChange={handleOptionChange}
          />
          <label>
            <img src={santaClaus} className="img-icon" />
          </label>
        </form>
      </div>
      <div className="image-box-one">
          <img src={img1} className="meme-img"/>
          <p className="meme-text-box text-box-one">{jokes?.setup}</p>
      </div>
      <div className="image-box-two">
      <img src={img2} className="meme-img"/>
      <p className="meme-text-box text-box-two">{jokes?.delivery ? jokes?.delivery : ""}</p>
      </div>
      {/* <p>{jokes?.setup}</p> */}
      {/* <p>{jokes?.delivery ? jokes?.delivery : ""}</p> */}
      <button className="another-one-btn" onClick={() => fetchJokes()}>Another one</button>
    </div>
  );
}

export default App;
