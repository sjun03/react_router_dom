import "./Musinsa_css.css";
import Bell from "./Bell.png";
const MainTop = () => {
  return (
    <div className="main-top">
      <p className="logo">MUSINSA</p>
      <img src={Bell} alt="알람" />
    </div>
  );
};
export default MainTop;
