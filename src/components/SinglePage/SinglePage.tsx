import { useParams } from "react-router-dom";
import dataCharacters from "../../data/dataCharacters";
import { labels } from "../../labels";
import "./SinglePage.scss";

const SinglePage = () => {
  const para = useParams();
  const idCharacter = para.id as unknown as number;
  const index: number = idCharacter as number;
  const dataAndIndex = dataCharacters[index];
  return (
    <div className="singlePageBox">
      <img className="singlePageBox__img"src={dataAndIndex.src} alt={dataAndIndex.character} />
      <div className="singlePageBox__data">
        <p className="singlePageBox__data-textCharacter">{dataAndIndex.character}</p>
        {dataAndIndex.game === "dnd" && (
          <div  className="singlePageBox__data-textDnd">
            <p >
              <span className="singlePageBox__data-textDnd--title">{labels.singlePage.titlePersonalityTraits}</span> {dataAndIndex.history.personality_traits}
            </p>
            <p> <span className="singlePageBox__data-textDnd--title">{labels.singlePage.titleIdeals}</span> {dataAndIndex.history.ideals}</p>
            <p> <span className="singlePageBox__data-textDnd--title">{labels.singlePage.titleBonds}</span> {dataAndIndex.history.bonds}</p>
            <p> <span className="singlePageBox__data-textDnd--title">{labels.singlePage.titleFlaws}</span> {dataAndIndex.history.flaws}</p>
          </div>
        )}

        <p className="singlePageBox__data-titleHistory"> {labels.singlePage.titleHistory}</p>



        <p className="singlePageBox__data-history">{dataAndIndex.history.history}</p>
      </div>
    </div>
  );
};

export default SinglePage;
