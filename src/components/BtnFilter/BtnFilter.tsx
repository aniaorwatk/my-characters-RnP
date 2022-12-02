import { ISectionType } from "../Section/Section";
import "./BtnFilter.scss";

interface IBtnFilterType{
    labelBtn: string,
    onClick: ()=> void ,
    btnColor:string,
    // setFilterCharacters: React.Dispatch<React.SetStateAction<ISectionType []>>,
    // nameFilter: { id: number; character: string; src: string; information: string; game: string; death: boolean; history: { personality_traits: string; ideals: string; bonds: string; flaws: string; history: string; }; }[],
   
}
const BtnFilter =({labelBtn,btnColor, onClick
    
    // setFilterCharacters,nameFilter


}:IBtnFilterType)=>{
  return(  <button
        type="button"
        className={`btnFilter ${btnColor}`}
        onClick={onClick}
      >
        {labelBtn}
      </button>
  )
}

export default BtnFilter



