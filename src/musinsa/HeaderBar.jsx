import "./Musinsa_css.css";
import Menu from "./Menu.png";
import Bell from "./Bell.png";
import Search from "./Search.png";
import Mypage from "./Mypage";
import HeaderMenu from "./HeaderMenu";
const HeaderBar = () => {
  return (
    <div className="header-bar">
      <HeaderMenu />
      <Mypage />
    </div>
  );
};
export default HeaderBar;
