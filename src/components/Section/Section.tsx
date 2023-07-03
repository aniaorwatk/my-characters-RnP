import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";
import MenuFilter from "../MenuFilter/MenuFilter";
import Search from "../Search/Search";
import "./Section.scss";
import { filteredProducts } from "./SectionHandler";
import dataCharacters from "../../data/dataCharacters";

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
    setFilterCharacters(filteredProducts(dataCharacters, query));
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
    <div className="section">
      <MenuFilter
        searchBox={<Search searchCharacter={searchCharacter} query={query} />}
        btnBox={
          dataCharacters && (
            <Filter
              setFilterCharacters={setFilterCharacters}
              query={query}
              dataCharacter={dataCharacters}
            />
          )
        } // Warunkowe przekazanie dataCharacter
      />
      <div className="section__cards">{cards}</div>
    </div>
  );
};

export default Section;
