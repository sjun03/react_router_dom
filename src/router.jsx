import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./mainpage";
import Test from "./test";
import Musinsa from "./musinsa/musinsa";
import Google from "./google/google";
import Todo from "./todo/todo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="todo" element={<Todo />} />
        <Route path="google" element={<Google />} />
        <Route path="musinsa" element={<Musinsa />} />
        <Route path="/" element={<MainPage />} />
        <Route path="notice" element={<div>notice</div>} />
        <Route path="notice/:id" element={<div>notice id</div>} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
