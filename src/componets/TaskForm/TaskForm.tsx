import React from "react";
import styles from "./TaskForm.module.scss";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createTask,selectTask } from "../TaskSlice";

type Inputs = {
  taskTitle: string;
};

type PropTypes = {
  edit?: boolean;
};

const TaskForm: React.FC<PropTypes> = ({ edit }) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector(selectTask);

  const { register, handleSubmit, reset } = useForm();

  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };


  const handleEdit = (data: Inputs) => {
    const sendData ={...selectedTask,title:data.taskTitle}
    dispatch(createTask(sendData));
  }

  return (
    <div className={styles.root}>
      {/* <form
        className={styles.form}
        onSubmit={edit ? console.log("edit") : handleSubmit(handleCreate)}
      > */}
        <form
        onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
        className={styles.form}
        noValidate
        autoComplete="off"
      >

        <TextField
          id="outlined-basic"
          label={edit ? "edittask" : "new task"}
          variant="outlined"
          className={styles.text_field}
          inputRef={register}
          name="taskTitle"
        />
        {edit? (
          <div className={styles.wrapper}>
<button className={styles.submit_button}>変更</button>
<button className={styles.cancel_button}>キャンセル</button>
</div>
          
        ):null}
      </form>
    </div>
  );
};

export default TaskForm;
