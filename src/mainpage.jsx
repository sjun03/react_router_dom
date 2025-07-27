import { useNavigate, Link } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <a href="/notice">gont</a>
      <Link to={"/notice"}>link test</Link>
      <button
        onClick={() => {
          navigate("notice/123456");
        }}
      >
        button test
      </button>
      <button
        onClick={() => {
          navigate("google");
        }}
      >
        google
      </button>
      <button
        onClick={() => {
          navigate("musinsa");
        }}
      >
        musinsa
      </button>
      <button
        onClick={() => {
          navigate("Todo");
        }}
      >
        todo
      </button>
    </div>
  );
};
export default MainPage;
