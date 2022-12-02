import "./BtnFilter.scss";

interface IBtnFilterType {
  labelBtn: string;
  onClick: () => void;
  btnColor: string;
}
const BtnFilter = ({ labelBtn, btnColor, onClick }: IBtnFilterType) => {
  return (
    <button type="button" className={`btnFilter ${btnColor}`} onClick={onClick}>
      {labelBtn}
    </button>
  );
};

export default BtnFilter;
