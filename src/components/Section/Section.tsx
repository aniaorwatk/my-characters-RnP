import { useState } from "react";
import dataCharacters from "../../data/dataCharacters";
import Card from "../Card/Card";
import Search from "../Search";
import "./Section.scss";
import {
  filterCthulhu,
  filterDeathCharacters,
  filterDnD,
  filterLiveCharacters,
} from "./SectionHandler";

interface ISectionType {
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
        onClick={() => setFilterCharacters(filterLiveCharacters)}
      >
        Live Characters
      </button>
      <button
        type="button"
        onClick={() => setFilterCharacters(filterDeathCharacters)}
      >
        Death Characters
      </button>

      <div className="section">{cards}</div>
    </>
  );
};

export default Section;
