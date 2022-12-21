import "./MenuFilter.scss";

interface IMenuFilterType {
    searchBox: JSX.Element,
    btnBox: JSX.Element
}

const MenuFilter = ({ searchBox, btnBox }: IMenuFilterType) => {
    return (
        <div className="menuFilter">
            {searchBox}
            <div className="menuFilter__btnBox">{btnBox}</div>
        </div>
    )

}

export default MenuFilter
