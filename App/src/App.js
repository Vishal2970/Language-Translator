import "./App.css";
import { useState } from "react";

const norwegianDictionary = {
  hello: "hej",
  world: "verden",
  how: "hvordan",
  are: "er",
  you: "du",
};

function App() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    translateText(text);
  };

  const translateText = (text) => {
    const words = text.split(" ");
    const translatedWords = words.map((word) => norwegianDictionary[word.toLowerCase()] || word
    );
    const translatedText = translatedWords.join(" ");
    setTranslatedText(translatedText);
  };

  return (
    <div className="container">
      <div className="box">
        <form>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={text}
              onChange={handleTextChange}
              style={{ fontFamily: "Arial, sans-serif", fontSize: 18 }}
              placeholder="Enter here"
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
          <h2 style={{ fontFamily: "Arial, sans-serif", fontSize: 24 }}>
            Translated Text
          </h2>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: 18 }}>
            {translatedText}
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;