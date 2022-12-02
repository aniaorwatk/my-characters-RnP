import { ISectionType } from "../Section/Section";
import "./BtnFilter.scss";

interface IBtnFilterType{
    labelBtn: string,
    // onClick: ()=> void ,
    btnColor:string,
    setFilterCharacters: React.Dispatch<React.SetStateAction<ISectionType[]>>,
    nameFilter: JSX.Element,

}
const BtnFilter =({labelBtn,btnColor, setFilterCharacters,nameFilter}:IBtnFilterType)=>{
    <button
        type="button"
        className={`btnFilter ${btnColor}`}
        onClick={()=>setFilterCharacters(nameFilter)}
      >
        {labelBtn}
      </button>
}

export default BtnFilter



