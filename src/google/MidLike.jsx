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

const MidLike = () => {
  return (
    <div className="like">
      <div className="like-1">
        <div>
          <img src={naver} alt="네이버" />
        </div>
        <p>naver</p>
      </div>
      <div className="like-2">
        <div>
          <img src={chatgpt} alt="" />
        </div>
        <p>chatgpt</p>
      </div>
      <div className="like-3">
        <div>
          <img src={instagram} alt="" />
        </div>
        <p>instagram</p>
      </div>
      <div className="like-4">
        <div>
          <img src={notion} alt="" />
        </div>
        <p>notion</p>
      </div>
      <div className="like-5">
        <div>
          <img src={perplexity} alt="" />
        </div>
        <p>perplexity</p>
      </div>
      <div className="like-6">
        <div>
          <img src={youtube} alt="" />
        </div>
        <p>youtube</p>
      </div>
      <div className="like-7">
        <div>
          <img src={ascode} alt="" />
        </div>
        <p>as.code</p>
      </div>
      <div className="like-8">
        <div>
          <img src={baekjoon} alt="" />
        </div>
        <p>baekjoon</p>
      </div>
      <div className="like-9">
        <div>
          <img src={deu} alt="" />
        </div>
        <p>deu</p>
      </div>
      <div className="like-10">
        <div>
          <img src={github} alt="" />
        </div>
        <p>github</p>
      </div>
    </div>
  );
};
export default MidLike;
