import { Link } from "react-router-dom";
import "./Card.scss";

interface ICardType{
    id:number,
    img: string,
    characterName: string,
    information: string

}

export default function Card({img,characterName,information, id}:ICardType) {
    return (
        <Link to={`/${id}`}>
        <div className="card">
            <img src={img} className="card__image" alt={characterName} />
            <div className="card__information">
            <p className="card__information-name">{characterName}</p>
            <p>{information}</p>
            </div>
        </div>
        </Link>
    )
}
