import { Link } from "react-router-dom";
import { labels } from "../../labels";
import "./LinkReturn.scss";

const LinkReturn = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Link
      to="/my-characters-RnP"
      className="linkReturn"
      onClick={handleLinkClick}
    >
      {labels.singlePage.labelBtnReturn}
    </Link>
  );
};

export default LinkReturn;
