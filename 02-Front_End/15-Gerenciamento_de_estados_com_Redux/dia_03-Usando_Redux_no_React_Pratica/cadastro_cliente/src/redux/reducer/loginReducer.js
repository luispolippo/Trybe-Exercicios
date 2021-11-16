import { SAVE_LOGIN } from "../actions";

const initialState = {
  email: '',
  password: '',
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_LOGIN:
    return { ...state, ...action.payload}  
  default:
    return state;
  }
}

export default loginReducer;