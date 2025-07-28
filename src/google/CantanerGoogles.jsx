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
import React from "react";
import "./mycss.css";
import Topcp from './topcp';
import MidCp from './MidCp';
import Bottom from './Bottom';
import Button from "./Button";

const CantanerGoogles = () => { 
  return (
    <div className="cantanerGoogle">
      <Topcp/>
      <MidCp/>
      <Bottom/>
      <Button/>
    </div>
  );
}
export default CantanerGoogles;
