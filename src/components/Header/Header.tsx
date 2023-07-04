import { labels } from "../../labels";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">{labels.header.title.toUpperCase()}</h1>
      <div className="header__img dark"></div>
      <div className="header__img light"></div>
    </div>
  );
};

export default Header;
