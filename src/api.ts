import axios from "axios";
import { Todo, todoType } from "./constants";

export async function getData(): Promise<Todo[]> {
  const response = await fetch("http://localhost:8080/todos").then((res) =>
    res.json()
  );
  return response;
}

export const addTodo = async (
  message: string,
  type: todoType
): Promise<Todo> => {
  const response = await axios.post(
    "http://localhost:8080/todos",

    {
      message,
      type,
    }
  );
  return await response.data;
};

export const updateTodo = async (changedTodo: Todo): Promise<Todo> => {
  const response = await axios.patch(
    `http://localhost:8080/todos/${changedTodo.id}`,
    {
      ...changedTodo,
    }
  );

  return await response.data;
};
