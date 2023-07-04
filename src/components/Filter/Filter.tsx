import { labels } from "../../labels";
import BtnFilter from "../BtnFilter/BtnFilter";
import { ISectionType } from "../Section/Section";
import {
  Character,
  colorBtn,
  filterCthulhu,
  filterDeadCharacters,
  filterDnD,
  filterLivingCharacters,
} from "../Section/SectionHandler";
import "./Filter.scss";

interface IFilterType {
  setFilterCharacters: React.Dispatch<React.SetStateAction<ISectionType[]>>;
  query: string;
  dataCharacter?: Character[];
}

const Filter = ({ setFilterCharacters, dataCharacter }: IFilterType) => {
  return (
    <div className="filter">
      <BtnFilter
        labelBtn={labels.section.labelBtnAllCharacters}
        btnColor={colorBtn.colorAll}
        onClick={() => setFilterCharacters(dataCharacter || [])}
      />
      <BtnFilter
        labelBtn={labels.section.labelBtnDnD}
        btnColor={colorBtn.colorDnd}
        onClick={() => setFilterCharacters(filterDnD(dataCharacter || []))}
      />
      <BtnFilter
        labelBtn={labels.section.labelBtnCthulhu}
        btnColor={colorBtn.colorCthulhu}
        onClick={() => setFilterCharacters(filterCthulhu(dataCharacter || []))}
      />
      <BtnFilter
        labelBtn={labels.section.labelBtnLivingCharacters}
        btnColor={colorBtn.colorLiving}
        onClick={() =>
          setFilterCharacters(filterLivingCharacters(dataCharacter || []))
        }
      />
      <BtnFilter
        labelBtn={labels.section.labelBtnDeadCharacters}
        btnColor={colorBtn.colorDead}
        onClick={() =>
          setFilterCharacters(filterDeadCharacters(dataCharacter || []))
        }
      />
    </div>
  );
};

export default Filter;
