import dataCharacters from "../../data/dataCharacters";

export const filterDnD = dataCharacters.filter((character) => {
  return character.game.includes("dnd");
});

export const filterCthulhu = dataCharacters.filter((character) => {
  return character.game.includes("cthulhu");
});

export const filterLivingCharacters = dataCharacters.filter((character) => {
  return character.death === false;
});

export const filterDeadCharacters = dataCharacters.filter((character) => {
  return character.death === true;
});

export const filteredProducts =(query:string)=> dataCharacters.filter((character) => {
  return character.character.toLowerCase().includes(query.toLowerCase());
});

export const colorBtn = {
  colorDnd: "colorDnD",
  colorCthulhu: "colorCthulhu",
  colorAll: "colorAll",
  colorDead: "colorDead",
  colorLiving: "colorLiving",
};
