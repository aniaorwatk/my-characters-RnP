import { Key, useEffect, useState } from "react";
import dataCharacters from "../../data/dataCharacters";
import Card from "../Card/Card";
import Search from "../Search";
import "./Section.scss";

interface ISectionType{
  death: boolean; 
  game: string; 
  id:  number; 
  src: string; 
  character: string; 
  information: string;
}

const Section = () => {
  const [query, setQuery] = useState<string>("");
  const [f, setf]= useState<ISectionType[]>()



  const searchCharacter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setf(filteredProducts)
  };

  const filteredProducts = dataCharacters.filter((character) => {
    return character.character.toLowerCase().includes(query.toLowerCase());
  });
  const filterDnD = dataCharacters.filter((character) => {
    return character.game.includes("dnd");
  });

  const filterC = dataCharacters.filter((character) => {
    return character.game.includes("cthulhu");
  });

  useEffect(()=>{
    return setf(filteredProducts);
  },[])


let filterX = filteredProducts
console.log(filterX)

  let cards = (f || []).map((item) => {
    {
      return (
        <Card
          death={item.death}
          game={item.game}
          id={item.id}
          key={item.id}
          img={item.src}
          characterName={item.character}
          information={item.information}
        />
      );
    }
  });

  return (
    <>
      <Search searchCharacter={searchCharacter} query={query} />
      <button type="button" onClick={()=> setf(filterDnD) }>onlyDnD</button>
      <button type="button" onClick={()=> setf(filterC)  }>onlyDnD</button>
      <div className="section">{cards}</div>
    </>
  );
};

export default Section;
