import "./Musinsa_css.css";
import Menu from "./Menu.png";
import Bell from "./Bell.png";
import Search from "./Search.png";
import Headercp from "./Headercp";
import Miancp from "./Maincp";
import MainNav from "./MainNav";
import Footer from "./Footer";

const Containercp = () => {
  return (
    <div className="container">
      <Headercp />
      <Miancp/>
      <MainNav/>
      <Footer/>
    </div>
  );
};
export default Containercp;
