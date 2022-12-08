import { useEffect, useState } from "react";
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
  filteredProducts,
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
  const [query, setQuery] = useState("");
  const [filterCharacters, setFilterCharacters] = useState<ISectionType[]>([]);

  const searchCharacter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    setFilterCharacters(filteredProducts(query));
  }, [query]);

  let cards = filterCharacters.map((item) => {
    const { death, game, id, src, character, information } = item;
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
      <BtnFilter
        labelBtn={labels.section.labelBtnAllCharacters}
        btnColor={colorBtn.colorAll}
        onClick={() => setFilterCharacters(filteredProducts(query))}
      />
      <BtnFilter
        labelBtn={labels.section.labelBtnDnD}
        btnColor={colorBtn.colorDnd}
        onClick={() => setFilterCharacters(filterDnD)}
      />
      <BtnFilter
        labelBtn={labels.section.labelBtnCthulhu}
        btnColor={colorBtn.colorCthulhu}
        onClick={() => setFilterCharacters(filterCthulhu)}
      />
      <BtnFilter
        labelBtn={labels.section.labelBtnLivingCharacters}
        btnColor={colorBtn.colorLiving}
        onClick={() => setFilterCharacters(filterLivingCharacters)}
      />
      <BtnFilter
        labelBtn={labels.section.labelBtnDeadCharacters}
        btnColor={colorBtn.colorDead}
        onClick={() => setFilterCharacters(filterDeadCharacters)}
      />
      <div className="section">{cards}</div>
    </>
  );
};

export default Section
