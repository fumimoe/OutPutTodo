import React from "react";
import styles from "./TaskItems.module.scss";
import Checkbox from "@material-ui/core/Checkbox";
import EventNoteIcon from "@material-ui/icons/EventNote";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

interface PropTypes {
    task: { id: number; title: string; completed: boolean };
  }

const TaskItems: React.FC<PropTypes> = ({ task }) => {
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
        <IconButton
          onClick={() => console.log("edit")}
          className={styles.edit_button}
        >
          <EditIcon className={styles.icon} />
        </IconButton>
        <IconButton
          onClick={() => console.log("delete")}
          className={styles.delete_button}
        >
          <DeleteIcon className={styles.icon} />
        </IconButton>
      </div>
    </div>
  );
};

export default TaskItems;
