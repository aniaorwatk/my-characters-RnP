import { ISectionType } from "./Section";

export const colorBtn = {
  colorDnd: "colorDnD",
  colorCthulhu: "colorCthulhu",
  colorAll: "colorAll",
  colorDead: "colorDead",
  colorLiving: "colorLiving",
};

export interface Character {
  id: number;
  character: string;
  src: string;
  information: string;
  game: string;
  death: boolean;
  allInformation: {
    personality_traits: string;
    ideals: string;
    bonds: string;
    flaws: string;
    history: string;
  };
}

export interface CharacterFilter {
  (dataCharacters: Character[]): Character[];
}

export const filterDnD: CharacterFilter = (dataCharacters) => {
  return dataCharacters.filter((character) => {
    return character.game.includes("dnd");
  });
};

export const filterCthulhu: CharacterFilter = (dataCharacters) => {
  return dataCharacters.filter((character) => {
    return character.game.includes("cthulhu");
  });
};

export const filterLivingCharacters: CharacterFilter = (dataCharacters) => {
  return dataCharacters.filter((character) => {
    return character.death === false;
  });
};

export const filterDeadCharacters: CharacterFilter = (dataCharacters) => {
  return dataCharacters.filter((character) => {
    return character.death === true;
  });
};

export const filteredProducts = (
  dataCharacters: ISectionType[],
  query: string
): ISectionType[] => {
  return dataCharacters.filter((character) => {
    return character.character.toLowerCase().includes(query.toLowerCase());
  });
};
