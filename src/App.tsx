import { useState } from "react";
import "./App.css";
import FruitFacts from "./components/FruitFacts";

function App() {
  const [displayFruitFacts, setDisplayFruitFacts] = useState(false);
  const updateText = () => {
    setDisplayFruitFacts(false);
  };

  const fruitFactsArray = [
    { name: "Banana", fact: "I am yellow in color" },
    { name: "Peach", fact: "I have fuzzy skin" },
    { name: "Apple", fact: "I tend to be crunchy" },
  ];

  return (
    <>
      <h2>Day 4 / Random Fruit Facts</h2>
      <FruitFacts
        ComponentWillDisplayFruitFacts={displayFruitFacts}
        handleClick={updateText}
      ></FruitFacts>
      {fruitFactsArray.map(({ name, fact }) => {
        <div>
          {name}, {fact}
        </div>;
      })}
    </>
  );
}

export default App;
