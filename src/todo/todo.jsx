import "./Todo.css";
import InputTodo from "./components/input";
import ListTodo from "./components/list";
import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <main>
      <InputTodo
        inputValue={inputValue}
        setInputValue={setInputValue}
        setTodos={setTodos}
      ></InputTodo>

      <ListTodo todos={todos}
      setTodos={setTodos}></ListTodo>
      
    </main>
  );
}
export default Todo;