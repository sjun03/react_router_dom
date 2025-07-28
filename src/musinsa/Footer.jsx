import "./Musinsa_css.css";
import Menu from "./Menu.png";
import Bell from "./Bell.png";
import Search from "./Search.png";
const Footer = () => {
  return (
    <div className="footer">
      <button
        className="upbutten"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      ></button>
    </div>
  );
};
export default Footer;
