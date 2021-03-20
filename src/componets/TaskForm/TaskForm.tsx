import React from "react";
import styles from "./TaskForm.module.scss";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { type } from "node:os";

type Inputs = {
    taskTitle: string
}

const TaskForm = () => {

    const { register, handleSubmit, reset } = useForm();

    const handleCreate = (data:Inputs) => {
        console.log(data)
        reset();
    }
  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit(handleCreate)}>
        <TextField
          id="outlined-basic"
          label="new task"
          variant="outlined"
          className={styles.text_field}
          inputRef={register}
          name='taskTitle'
          
        />
      </form>
    </div>
  );
};

export default TaskForm;
