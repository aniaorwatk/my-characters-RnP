import React from "react";
import { labels } from "../../labels";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">{labels.header.title.toUpperCase()}</h1>
    </div>
  );
};

export default Header;
