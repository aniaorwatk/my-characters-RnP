import React from "react";
// import img from "../../../public/images/"
import "./Card.scss";

interface ICardType{
    img: string,
    characterName: string,
    information: string

}

export default function Card({img,characterName,information}:ICardType) {
    return (
        <div className="card">
            <img src={`../../../public/images/${img}`} className="card__image" />

            <p>{characterName}</p>
            <p>{information}</p>
        </div>
    )
}