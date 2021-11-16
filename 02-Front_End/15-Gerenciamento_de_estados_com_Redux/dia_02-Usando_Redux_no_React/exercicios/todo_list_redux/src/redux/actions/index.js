import { ADD_TASK, REMOVE_TASK } from "./actionTypes";

export const addTaskAction = (task) => ({type: ADD_TASK, task});
export const removeTaskAction = (index) => ({type: REMOVE_TASK, index});