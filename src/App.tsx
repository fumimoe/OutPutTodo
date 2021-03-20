import React from 'react';
import Header from './componets/Header/Header';
import { Counter } from './features/counter/Counter';
import styles from './App.module.scss';
import TaskForm from './componets/TaskForm/TaskForm';
import TaskList from './componets/TaskList/TaskList';



const App: React.FC = ()=> {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
      <Header/>
      <TaskForm/>
      <TaskList/>
      </div>
      
    </div>
  );
}

export default App;
