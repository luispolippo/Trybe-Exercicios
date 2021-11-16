import { ADD_TASK, REMOVE_TASK } from '../actions/actionTypes'; 

const INITIAL_STATE = {
  tasks: [],
}

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK: 
      return { ...state, tasks: [...state.tasks, action.task ]};
    case REMOVE_TASK:
      return { ...state, tasks: [...state.tasks.slice(0, action.index), ...state.tasks.slice(action.index + 1)] }  
    default:
      return state;  
  }
}

export default taskReducer;