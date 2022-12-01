import dataCharacters from "../../data/dataCharacters";



// export const filteredProducts = dataCharacters.filter((character) => {
//     return character.character.toLowerCase().includes(query.toLowerCase());
    
//   });
  export const filterDnD = dataCharacters.filter((character) => {
    return character.game.includes("dnd");
  });

  export const filterCthulhu = dataCharacters.filter((character) => {
    return character.game.includes("cthulhu");
  });

  export const filterLiveCharacters =dataCharacters.filter((character)=>{
    return character.death === false;
  })

  export const filterDeathCharacters = dataCharacters.filter((character)=>{
    return character.death === true;
  })