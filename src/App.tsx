import { useState } from "react";
import "./App.css";
import FruitFacts from "./components/FruitFacts";

function App() {
  const [displayFruitFacts, setDisplayFruitFacts] = useState(false);
  const updateText = () => {
    setDisplayFruitFacts(false);
  };

  return (
    <>
      <h2>Day 4 / Random Fruit Facts</h2>
      <FruitFacts
        ComponentWillDisplayFruitFacts={displayFruitFacts}
        handleClick={updateText}
      ></FruitFacts>
    </>
  );
}

export default App;
