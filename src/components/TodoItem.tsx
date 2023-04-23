import { Text, Button, Flex, Select } from "@chakra-ui/react";
import { todoType } from "../constants";

import { ColorMap, Todo } from "../constants";
type TodoItemProps = {
  todoItem: Todo;
};
const TodoItem = (props: TodoItemProps) => {
  const { todoItem } = props;

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
      <Text>Message:- {todoItem.message}</Text>
      <Flex gap="2">
        <Select mb="1.5" focusBorderColor="white">
          {Object.values(todoType).map((todoType) => (
            <option key={todoType} value={todoType}>
              {todoType}
            </option>
          ))}
        </Select>
        <Button variant="solid" colorScheme="teal">
          Delete
        </Button>
      </Flex>
    </Flex>
  );
};

export default TodoItem;
