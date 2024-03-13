import "./App.css";
import FruitFact from "./components/FruitFact";

function App() {
  const buttonText = "Show me fruit facts";
  const fruitFactsArray = [
    { name: "Banana", fact: "I am yellow in color" },
    { name: "Peach", fact: "I have fuzzy skin" },
    { name: "Apple", fact: "I tend to be crunchy" },
  ];

  return (
    <>
      <h2>Day 4 / Random Fruit Facts</h2>
      <button>{buttonText}</button>
      {fruitFactsArray.map(({ name, fact }) => (
        <div key={name}>
          <FruitFact fruit={name} fact={fact} />
        </div>
      ))}
    </>
  );
}

export default App;
