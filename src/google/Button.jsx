import "./mycss.css";
const Button = () => {
  return (
    <div className="upbutton">
      <button 
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >up</button>
    </div>
  );
};
export default Button;
