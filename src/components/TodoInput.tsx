import { useState } from "react";
import { Todo, todoType } from "../constants";
import { addTodo } from "../api";
import { Input, Box, Button, Select } from "@chakra-ui/react";

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
    <Box border="1px solid #ccc" padding="10" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={value}
          onChange={handleChangeValue}
          placeholder="Please Enter Your Todo"
          mb="1.5"
        />
        <Select onChange={handleSelectValue} value={selectValue} mb="1.5">
          {Object.values(todoType).map((todoType) => (
            <option key={todoType} value={todoType}>
              {todoType}
            </option>
          ))}
        </Select>
        <Button type="submit" variant="solid" colorScheme="teal">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default TodoInput;
