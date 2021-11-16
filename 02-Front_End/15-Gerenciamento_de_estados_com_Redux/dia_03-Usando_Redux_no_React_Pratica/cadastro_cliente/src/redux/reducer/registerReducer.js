import { SAVE_CLIENT } from "../actions";

const initialState = {
  name: '',
  age: '',
  email: '',
}

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_CLIENT:
    return { ...state, ...action.payload}  
  default:
    return state;
  }
}

export default registerReducer;