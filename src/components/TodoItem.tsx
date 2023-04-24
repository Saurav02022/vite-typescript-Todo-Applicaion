import { Text, Button, Flex, Select, Box } from "@chakra-ui/react";
import { todoType } from "../constants";

import { ColorMap, Todo } from "../constants";
import { useState } from "react";
import { deleteTodo, updateTodo } from "../api";
import { DeleteIcon } from "@chakra-ui/icons";

type TodoItemProps = {
  todoItem: Todo;
  OnUpdate: (todo: Todo) => void;
  OnDelete: (todo: Todo) => void;
};

const TodoItem = (props: TodoItemProps) => {
  const { todoItem, OnUpdate, OnDelete } = props;
  const [changedType, setChangedType] = useState<todoType>(todoItem.type);

  const handleChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChangedType(e.target.value as todoType);
  };

  const handleUpdateTodo = async () => {
    await updateTodo({
      ...todoItem,
      type: changedType,
    })
      .then((res) => OnUpdate(res))
      .catch((error) => console.error(error));
  };

  const deleteTodoItem = async () => {
    await deleteTodo(todoItem.id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    OnDelete(todoItem);
  };

  return (
    <Flex
      flexDirection="column"
      border="2px solid #ccc"
      padding="20px"
      borderRadius="md"
      gap="5px"
      align="center"
      backgroundColor={ColorMap[todoItem.type]}
    >
      <Flex gap="2">
        <Text>Message:- {todoItem.message}</Text>
        <Box onClick={deleteTodoItem}>{<DeleteIcon />}</Box>
      </Flex>
      <Flex gap="2">
        <Select
          mb="1.5"
          focusBorderColor="white"
          onChange={handleChangeType}
          value={changedType}
        >
          {Object.values(todoType).map((todoType) => (
            <option
              key={todoType}
              value={todoType}
              disabled={todoItem.type === todoType}
            >
              {todoType}
            </option>
          ))}
        </Select>
        <Button variant="solid" colorScheme="teal" onClick={handleUpdateTodo}>
          Save
        </Button>
      </Flex>
    </Flex>
  );
};

export default TodoItem;
