type FruitFactProps = {
  fruit: string;
  fact: string;
};
const FruitFact = ({ fruit, fact }: FruitFactProps) => {
  return (
    <>
      <p>
        {fruit}: {fact}
      </p>
    </>
  );
};

export default FruitFact;
