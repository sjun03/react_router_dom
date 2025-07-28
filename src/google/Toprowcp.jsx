import TopRowExpoCp from "./TopRowExpoCp";
import TopRowGmailCp from "./TopRowGmailCp";
import TopRowImgCp from "./topRowImgCp";
import TopRowMenuCp from "./TopRowMenuCp";
import expo from "./expo.png";
import profile from "./profile.png";
import googleimg from "./googleimg.png";
import search from "./search.png";
import bottom from "./bottom.png";
import menu from "./menu.png";
import naver from "./naver.png";
import chatgpt from "./chatgpt.png";
import github from "./github.png";
import instagram from "./instagram.png";
import notion from "./notion.png";
import perplexity from "./perplexity.png";
import youtube from "./youtube.png";
import ascode from "./ascode.png";
import baekjoon from "./baekjoon.png";
import deu from "./deu.png";
import "./mycss.css";
const Toprowcp = () => {
  return (
    <div className="row">
      <TopRowGmailCp />
      <TopRowImgCp />
      <TopRowExpoCp />
      <TopRowMenuCp />
      <button className="profile">
        <img src={profile} alt="프로필사진" />
      </button>
    </div>
  );
};
export default Toprowcp;
