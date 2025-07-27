const ListTodo = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, idx) => (
        <li key={idx}>{todo}</li>
      ))}
    </ul>
  );
};
export default ListTodo;
