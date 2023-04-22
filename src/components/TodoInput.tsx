import { useState } from "react";
import { Todo, todoType } from "../constants";
import { addTodo } from "../api";

type todoInputProps = {
  onAdd: (todo: Todo) => void;
};

const TodoInput = (props: todoInputProps) => {
  const { onAdd } = props;
  const [value, setValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<todoType>(todoType.Learning);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value as todoType);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value || !selectValue) {
      alert("Please fill all details");
      return;
    }
    await addTodo(value, selectValue).then((response) => onAdd(response));
    setValue("");
    setSelectValue(todoType.Learning);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: "1px solid #ccc",
          padding: "40px",
          borderRadius: "10px",
        }}
      >
        <input
          type="text"
          value={value}
          onChange={handleChangeValue}
          placeholder="Please Enter Your Todo"
          style={{
            padding: "10px",
            textAlign: "center",
            fontSize: "18px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
        />
        <select onChange={handleSelectValue} value={selectValue}>
          {Object.values(todoType).map((todoType) => (
            <option key={todoType} value={todoType}>
              {todoType}
            </option>
          ))}
        </select>
        <button
          type="submit"
          style={{
            width: "50%",
            padding: "5px",
            textAlign: "center",
            margin: "auto",
            borderRadius: "5px",
            backgroundColor: "teal",
            color: "white",
            fontSize: "18px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default TodoInput;
