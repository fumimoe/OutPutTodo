import React from "react";
import styles from "./TaskItems.module.scss";
import Checkbox from "@material-ui/core/Checkbox";
import EventNoteIcon from "@material-ui/icons/EventNote";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal";
import { selectIsModalOpen, handleModalOpen } from "../TaskSlice";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from '../TaskForm/TaskForm';

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItems: React.FC<PropTypes> = ({ task }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);

  const handleOpen = () => {
    dispatch(handleModalOpen(isModalOpen));
  };

  const handleClose = () => {
    dispatch(handleModalOpen(isModalOpen));
  };
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <IconButton>
          {" "}
          <EventNoteIcon />
        </IconButton>

        <div className={styles.title_text}>{task.title}</div>
      </div>
      <div className={styles.right_item}>
        <IconButton>
          <Checkbox
            checked={task.completed}
            onClick={() => console.log("checkbox")}
            inputProps={{ "aria-label": "primary checkbox" }}
            className={styles.checkbox}
          />
        </IconButton>
        <IconButton onClick={handleOpen} className={styles.edit_button}>
          <EditIcon className={styles.icon} />
        </IconButton>
        <IconButton
          onClick={() => console.log("delete")}
          className={styles.delete_button}
        >
          <DeleteIcon className={styles.icon} />
        </IconButton>
      </div>

      <Modal className={styles.modal} open={isModalOpen} onClose={handleClose}>
        <div className={styles.modal_content}>
          <div className={styles.modal_title}>modal</div>
          <TaskForm edit/>
        </div>
      </Modal>
    </div>
  );
};

export default TaskItems;
