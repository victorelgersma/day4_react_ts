import "./App.css";
import FruitFact from "./components/FruitFact";
import { useState } from "react";

function App() {
  const [showFacts, setShowFacts] = useState(false);
  const [buttonText, setButtonText] = useState("Show me fruit facts!");

  const fruitFactsArray = [
    { name: "Banana", fact: "I am yellow in color" },
    { name: "Peach", fact: "I have fuzzy skin" },
    { name: "Apple", fact: "I tend to be crunchy" },
  ];
  const handleClick = () => {
    setShowFacts((prev) => !prev);
    setButtonText("Fruit Facts are boring!");
  };

  const buttonStyle = {
    display: "block",
  };

  return (
    <>
      <h2>Day 4 / Random Fruit Facts</h2>
      <button style={buttonStyle} onClick={handleClick}>
        {buttonText}
      </button>
      {showFacts &&
        fruitFactsArray.map(({ name, fact }) => (
          <FruitFact key={name} fruit={name} fact={fact} />
        ))}
    </>
  );
}

export default App;
