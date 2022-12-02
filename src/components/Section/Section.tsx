import { SetStateAction, useState } from "react";
import dataCharacters from "../../data/dataCharacters";
import { labels } from "../../labels";
import BtnFilter from "../BtnFilter/BtnFilter";
import Card from "../Card/Card";
import Search from "../Search";
import "./Section.scss";
import {
  colorBtn,
  filterCthulhu,
  filterDeadCharacters,
  filterDnD,
  filterLivingCharacters,
} from "./SectionHandler";

export interface ISectionType {
  death: boolean;
  game: string;
  id: number;
  src: string;
  character: string;
  information: string;
}

const Section = () => {
  const [query, setQuery] = useState<string>("");

  const filteredProducts = dataCharacters.filter((character) => {
    return character.character.toLowerCase().includes(query.toLowerCase());
  });
  const [filterCharacters, setFilterCharacters] =
    useState<ISectionType[]>(filteredProducts);

  const searchCharacter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterCharacters(filteredProducts);
    setQuery(event.target.value);
  };

  let cards = filterCharacters.map((item) => {
    const {death, game, id, src, character, information} =item
    return (
      <Card
        death={death}
        game={game}
        id={id}
        key={id}
        img={src}
        characterName={character}
        information={information}
      />
    );
  });

  return (
    <>
      <Search searchCharacter={searchCharacter} query={query} />


      <BtnFilter labelBtn={labels.section.labelBtnDnD}  btnColor={colorBtn.colorDnd} setFilterCharacters={setFilterCharacters} nameFilter={filterDnD}/>


      <BtnFilter labelBtn={""} btnColor={""} setFilterCharacters={function (value: SetStateAction<JSX.Element>): void {
        throw new Error("Function not implemented.");
      } } nameFilter={undefined}/>
      

       {/* <BtnFilter labelBtn={""} onClick={function (): void {
        throw new Error("Function not implemented.");
      } } btnColor={""}/>
       {/* <BtnFilter labelBtn={""} onClick={function (): void {
        throw new Error("Function not implemented.");
      } } btnColor={""}/>
       <BtnFilter labelBtn={""} onClick={function (): void {
        throw new Error("Function not implemented.");
      } } btnColor={""}/>
       <BtnFilter labelBtn={""} onClick={function (): void {
        throw new Error("Function not implemented.");
      } } btnColor={""}/> */} */}
      <button type="button" onClick={() => setFilterCharacters(filterDnD)}>
        onlyDnD
      </button>
      <button type="button" onClick={() => setFilterCharacters(filterCthulhu)}>
        onlyC
      </button>
      <button
        type="button"
        onClick={() => setFilterCharacters(filteredProducts)}
      >
        allCharacters
      </button>
      <button
        type="button"
        onClick={() => setFilterCharacters(filterLivingCharacters)}
      >
        Live Characters
      </button>
      <button
        type="button"
        onClick={() => setFilterCharacters(filterDeadCharacters)}
      >
        Death Characters
      </button>

      <div className="section">{cards}</div>
    </>
  );
};

export default Section;
