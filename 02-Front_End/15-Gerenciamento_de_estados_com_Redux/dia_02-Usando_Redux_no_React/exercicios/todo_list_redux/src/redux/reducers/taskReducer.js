import { ADD_TASK } from '../actions/actionTypes'; 

const INITIAL_STATE = {
  tasks: [],
}

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK: 
      return { ...state, tasks: [...state.tasks, action.task ]};
    default:
      return state;  
  }
}

export default taskReducer;