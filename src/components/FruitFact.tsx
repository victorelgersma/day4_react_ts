type FruitFactProps = {
  fruit: string;
  fact: string;
};
const FruitFact = ({ fruit, fact }: FruitFactProps) => {
  const outputStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: "calc(10px+2vmin)",
    color: "white",
  };

  const divStyle: React.CSSProperties = {
    width: "150px",
    height: "150px",
    border: "4px solid white",
    display: "inline-block",
    margin: "10px",
    padding: "10px",
  };
  return (
    <>
      <div style={divStyle}>
        <h2 style={outputStyle}>{fruit}</h2>
        <p>{fact}</p>
      </div>
    </>
  );
};

export default FruitFact;
