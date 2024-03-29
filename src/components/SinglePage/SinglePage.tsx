import { useParams } from "react-router-dom";
import dataCharacters from "../../data/dataCharacters";
import { labels } from "../../labels";
import LinkReturn from "../LinkReturn/LinkReturn";
import "./SinglePage.scss";

const SinglePage = () => {
  const para = useParams();
  const idCharacter = para.id as unknown as number;
  const index: number = idCharacter as number;
  const dataAndIndex = dataCharacters[index];
  const noImage = "https://ogrod.ukw.edu.pl/img/no-image-person.png";

  return (
    <div className="singlePageBox">
      <LinkReturn />
      <img
        className="singlePageBox__img"
        src={dataAndIndex.src ? dataAndIndex.src : noImage}
        alt={dataAndIndex.character}
      />
      <div className="singlePageBox__data">
        <p className="singlePageBox__data-textCharacter">
          {dataAndIndex.character.toLocaleUpperCase()}
        </p>
        {dataAndIndex.game === "dnd" && (
          <div className="singlePageBox__data-textDnd">
            <p>
              <span className="singlePageBox__data-textDnd--title">
                {labels.singlePage.titlePersonalityTraits}
              </span>
              {dataAndIndex.allInformation.personality_traits}
            </p>
            <p>
              <span className="singlePageBox__data-textDnd--title">
                {labels.singlePage.titleIdeals}
              </span>
              {dataAndIndex.allInformation.ideals}
            </p>
            <p>
              <span className="singlePageBox__data-textDnd--title">
                {labels.singlePage.titleBonds}
              </span>
              {dataAndIndex.allInformation.bonds}
            </p>
            <p>
              <span className="singlePageBox__data-textDnd--title">
                {labels.singlePage.titleFlaws}
              </span>
              {dataAndIndex.allInformation.flaws}
            </p>
          </div>
        )}
        <p className="singlePageBox__data-titleHistory">
          {labels.singlePage.titleHistory}
        </p>
        <p className="singlePageBox__data-history">
          {dataAndIndex.allInformation.history}
        </p>
      </div>
    </div>
  );
};

export default SinglePage;
