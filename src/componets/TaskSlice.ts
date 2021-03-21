import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../app/store";

interface taskState {
  idCount: number;
  tasks: { id: number; title: string; completed: boolean }[];
  selectedTask: { id: number; title: string; completed: boolean };
  isModalOpen: boolean;
}

const initialState: taskState = {
  idCount: 1,
  tasks: [{ id: 1, title: "Task1", completed: false }],
  selectedTask: { id: 0, title: "", completed: false },
  isModalOpen: false,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    createTask: (state, action) => {
      state.idCount++;
      const newTask = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },

    handleModalOpen:(state,action) => {
        state.isModalOpen = !action.payload
    }
    
  },
});

export const { createTask,handleModalOpen } = taskSlice.actions;

export const selectTask = (state: RootState): taskState["tasks"] =>
  state.task.tasks;
  
  export const selectIsModalOpen = (state: RootState): taskState["isModalOpen"] =>
  state.task.isModalOpen;

export default taskSlice.reducer;
