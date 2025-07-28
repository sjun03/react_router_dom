const ListTodo = ({ todos, setTodos }) => {
  const Remove = (Removeidx) => {
    const setTodoss = todos.filter((todo, idx) => idx !== Removeidx);
    setTodos(setTodoss);
  };

  return (
    <ul>
      {todos.map((todo, idx) => (
        <li key={idx}>
          {todo}
          <button onClick={() => Remove(idx)}>x</button>
        </li>
      ))}
    </ul>
  );
};
export default ListTodo;
