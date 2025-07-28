import "./Musinsa_css.css";
import Menu from "./Menu.png";
import Bell from "./Bell.png";
import Search from "./Search.png";

const MainSearch = () => {
  return (
    <div className="main-search">
      <input
        type="text"
        className="searchbar"
        placeholder="  여쿨룩 완성 최대 70% 할인"
      />
      <button type="submit">
        <img className="searchbarimg" src={Search} alt="검색" />
      </button>
    </div>
  );
};
export default MainSearch;
