const InputTodo = ({inputValue, setInputValue, setTodos }) => {
  const handleInputChange = (event) => {
    console.log(inputValue)
    setInputValue(event.target.value);
  };
  const handleAddClick = () => {
    console.log(inputValue);
    setTodos((prev) => {
      return [...prev, inputValue];
    });
    setInputValue("");
  };
  return (
    <div className="inputContainer">
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddClick}>+</button>
    </div>
  );
};

export default InputTodo;