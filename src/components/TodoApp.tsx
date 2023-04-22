import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { getData } from "../api";
import { Todo } from "../constants";

const TodoApp = () => {
  const [data, setData] = useState<Todo[]>([]);
  useEffect(() => {
    getData().then((response) => setData(response));
  }, []);

  const OnAdd = (todo: Todo) => {
    setData([...data, todo]);
  };
  const OnUpdate = (todo: Todo) => {
    const updateTodo = data.map((item) => {
      if (item.id === todo.id) {
        return todo;
      }
      return item;
    });
    setData(updateTodo);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "sans-serif",
        }}
      >
        TODO Application
      </h1>
      <TodoInput onAdd={OnAdd} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          width: "95%",
          margin: "auto",
          gap: "1rem",
        }}
      >
        {data.length > 0 &&
          data.map((item: Todo) => (
            <TodoItem key={item.id} todoItem={item} OnUpdate={OnUpdate} />
          ))}
      </div>
    </div>
  );
};

export default TodoApp;
