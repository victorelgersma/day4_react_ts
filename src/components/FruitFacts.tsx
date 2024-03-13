type FruitFactProps = {
  handleClick: () => void;
  ComponentWillDisplayFruitFacts: boolean;
};
const FruitFacts = ({
  ComponentWillDisplayFruitFacts,
  handleClick,
}: FruitFactProps) => {
  const divStyle: React.CSSProperties = {
    width: "150px",
    height: "150px",
    border: "4px solid white",
    display: "inline-block",
    margin: "10px",
    padding: "10px",
  };

  const outputStyle: React.CSSProperties = {
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    textAlign: "center",
    height: "150px",
  };
  return (
    <>
      <div style={divStyle}>
        {!ComponentWillDisplayFruitFacts && (
          <h1 style={outputStyle} onClick={handleClick}>
            Show me Fruit Facts
          </h1>
        )}
      </div>
    </>
  );
};

export default FruitFacts;
