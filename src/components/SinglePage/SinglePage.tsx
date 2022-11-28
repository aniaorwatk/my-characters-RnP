import { useParams } from "react-router-dom";
import dataCharacters from "../../data/dataCharacters";

const SinglePage = () => {
  const para = useParams();
  const idCharacter = para.id as unknown as number;
  const index: number = idCharacter as number;
  const dataAndIndex = dataCharacters[index];
  return (
    <div>
      <img src={dataAndIndex.src} alt={dataAndIndex.character} />
      <div className="singlePage__data">
        <p> Name Character: {dataAndIndex.character}</p>
        <p> History</p>
        <p> Personality traits: {dataAndIndex.history.personality_traits}</p>
        <p> Ideals: {dataAndIndex.history.ideals}</p>
        <p> Bonds: {dataAndIndex.history.bonds}</p>
        <p> Flaws: {dataAndIndex.history.flaws}</p>
        <p>{dataAndIndex.history.history}</p>
      </div>
    </div>
  );
};

export default SinglePage;
