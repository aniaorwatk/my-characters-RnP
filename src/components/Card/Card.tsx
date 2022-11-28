import { Link } from "react-router-dom";
import "./Card.scss";

interface ICardType {
  id: number;
  img: string;
  characterName: string;
  information: string;
  game: string;
  death: boolean;
}

export default function Card({
  img,
  characterName,
  information,
  id,
  game,
  death,
}: ICardType) {
  const gameCthulhu = game === "cthulhu" ? "cthulhuBorder" : "";
  const gameDnd = game === "dnd" ? "dndBorder" : "";
  const deathCharacter = death ? "death" : "";
  return (
    <Link to={`/${id}`}>
      <div className={`card ${gameCthulhu || gameDnd}`}>
      {deathCharacter && <div className="card__deathCharacter"></div>}
        <img src={img} className="card__image" alt={characterName} />
        <div className="card__information">
          <p className="card__information-name">{characterName}</p>
          <p>{information}</p>
        </div>
      </div>
    </Link>
  );
}
