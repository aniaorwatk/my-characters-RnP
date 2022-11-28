import "./Card.scss";

interface ICardType{
    img: string,
    characterName: string,
    information: string

}

export default function Card({img,characterName,information}:ICardType) {
    return (
        <div className="card">
            <img src={img} className="card__image" />
            <div className="card__information">
            <p className="card__information-name">{characterName}</p>
            <p>{information}</p>
            </div>
        </div>
    )
}
