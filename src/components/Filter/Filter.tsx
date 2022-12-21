import { labels } from "../../labels"
import BtnFilter from "../BtnFilter/BtnFilter"
import { ISectionType } from "../Section/Section"
import { colorBtn, filterCthulhu, filterDeadCharacters, filterDnD, filteredProducts, filterLivingCharacters } from "../Section/SectionHandler"
import "./Filter.scss"

interface IFilterType {
    setFilterCharacters: React.Dispatch<React.SetStateAction<ISectionType[]>>
    query: string
}

const Filter = ({ setFilterCharacters, query }: IFilterType) => {
    return (
        < div className="filter">
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
        </div>
    )
}

export default Filter
