import React from "react";
import styles from "./TaskList.module.scss";
import sampleData from "./sampleData.json";
import TaskItems from "../TaskItems/TaskItems";

const TaskList: React.FC = () => {
  return (
    <div className={styles.root}>
      {sampleData.map((task) => (
        <TaskItems key={task.id} task={task} />
        
      ))}
    </div>
  );
};

export default TaskList;
