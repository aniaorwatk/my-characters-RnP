import dataCharacters from "../../data/dataCharacters";
import Card from "../Card/Card";
import "./Section.scss";

const Section = () => {
  const cards = dataCharacters.map((item) => {
    return (
      <Card
      id={item.id}
        key={item.id}
        img={item.src}
        characterName={item.character}
        information={item.information}
      />
    );
  });

  return <div className="section">{cards} 

  </div>;
};

export default Section;
