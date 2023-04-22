import { updateTodo } from "../api";
import { ColorMap, Todo } from "../constants";
type TodoItemProps = {
  todoItem: Todo;
  OnUpdate: (todo: Todo) => void;
};
const TodoItem = (props: TodoItemProps) => {
  const { todoItem, OnUpdate } = props;

  const handleLike = async () => {
    await updateTodo({ ...todoItem, likes: todoItem.likes + 1 }).then((res) =>
      OnUpdate(res)
    );
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid #ccc",
        padding: "20px",
        alignItems: "center",
        borderRadius: "10px",
        backgroundColor: ColorMap[todoItem.type],
      }}
    >
      <h3>Message:- {todoItem.message}</h3>
      <h3>Likes:-{todoItem.likes}</h3>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button
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
          onClick={handleLike}
        >
          Like
        </button>
        <button
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
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
