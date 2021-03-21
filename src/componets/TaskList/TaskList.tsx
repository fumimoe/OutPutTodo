import React from "react";
import styles from "./TaskList.module.scss";
import TaskItems from "../TaskItems/TaskItems";
import {useSelector}from 'react-redux';
import {selectTask} from '../TaskSlice';

const TaskList: React.FC = () => {
  
  const selectedTask = useSelector(selectTask);
    return (
    <div className={styles.root}>
      {selectedTask.map((task) => (
        <TaskItems key={task.id} task={task} />
        
      ))}
    </div>
  );
};

export default TaskList;
