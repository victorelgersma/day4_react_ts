import "./App.css";

function App() {
  const fruitFactsArray = [
    { name: "Banana", fact: "I am yellow in color" },
    { name: "Peach", fact: "I have fuzzy skin" },
    { name: "Apple", fact: "I tend to be crunchy" },
  ];

  return (
    <>
      <h2>Day 4 / Random Fruit Facts</h2>
      <button>Show me fruit facts</button>
      {fruitFactsArray.map(({ name, fact }) => (
        <div key={name}>
          <p>
            {name}: {fact}
          </p>
        </div>
      ))}
    </>
  );
}

export default App;
