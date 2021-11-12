import { Button, Paper, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import useInput from "../../hooks/useInput";

const TodoForm = () => {
  const [value, reset, bind] = useInput("");
  const { addTodo } = useContext(TodosContext);
  console.log("todo form render");
  return (
    <form
      style={{ margin: "1rem 0" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        reset();
      }}
    >
      <Paper>
        <TextField {...bind} margin="normal" label="Add New Todo" fullWidth />
        <Button type="submit">Add</Button>
      </Paper>
    </form>
  );
};

export default TodoForm;
