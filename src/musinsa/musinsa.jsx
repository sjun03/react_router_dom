import './Musinsa_css.css';
import Menu from './Menu.png';
import Bell from './Bell.png';
import Search from './Search.png';

const Musinsa = () => {
return(
    <div className="container">
      <div className="header">
        <div className="header-bar">
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
          <div className="mypage">
            <button type="button">검색</button>
            <button type="button">좋아요</button>
            <button type="button">마이</button>
            <button type="button">장바구니</button>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main-top">
          <p className="logo">MUSINSA</p>
          <img src={Bell} alt="알람" />
        </div>
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
      </div>
      <div className="main-nav">
        <button type="button">콘텐츠</button>
        <button type="button">추천</button>
        <button type="button">랭킹</button>
        <button type="button">세일</button>
        <button type="button">브랜드</button>
        <button type="button">발매</button>
        <button type="button">SPA 특가</button>
        <button type="button">슈즈워크</button>
      </div>
      <div className="footer">
        <button
          className="upbutten"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        ></button>
      </div>
    </div>
);
};
export default Musinsa;