import "./Musinsa_css.css";
import Menu from "./Menu.png";
import Bell from "./Bell.png";
import Search from "./Search.png";
const HeaderMenu = () => {
  return (
    <div className="header-menu">
      <img className="menu-icon" src={Menu} alt="메뉴" />
      <button type="button">MUSINSA</button>
      <button type="button">BEAUTY</button>
      <button type="button">PLAYR</button>
      <button type="button">OUTLET</button>
      <button type="button">BOUTIQUE</button>
      <button type="button">SHOES</button>
      <button type="button">KIDS</button>
      <button type="button">|</button>
      <button type="button">SNAP</button>
    </div>
  );
};
export default HeaderMenu;
