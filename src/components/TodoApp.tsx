import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { getData } from "../api";
import { Todo } from "../constants";

import { Flex, Heading, Grid } from "@chakra-ui/react";

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

  const OnDelete = (todo: Todo) => {
    const updateTodo = data.filter((item) => {
      if (item.id !== todo.id) {
        return item;
      }
    });
    setData(updateTodo);
  };

  return (
    <Flex flexDirection="column" gap="1rem" align="center">
      <Heading as="h1">TODO Application</Heading>
      <TodoInput onAdd={OnAdd} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
        gap="10px"
      >
        {data.length > 0 &&
          data.map((item: Todo) => (
            <TodoItem
              key={item.id}
              todoItem={item}
              OnUpdate={OnUpdate}
              OnDelete={OnDelete}
            />
          ))}
      </Grid>
    </Flex>
  );
};

export default TodoApp;
