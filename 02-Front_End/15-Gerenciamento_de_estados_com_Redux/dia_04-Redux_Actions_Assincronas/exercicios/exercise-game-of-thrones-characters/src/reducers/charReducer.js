import { REQUEST_CHAR, GET_CHAR, FAILED_REQUEST } from "../actions";

const initialState = {
  isLoading: false,
  character: '',
  error: '',
}

const charReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CHAR:
      return { ...state, isLoading: true }
    case GET_CHAR:
      return { ...state, isLoading: false, character: action.character[0] }  
    case FAILED_REQUEST:
      return { ...state, isLoading: false,  error: action.error };
    default:
      return state;    
  }
}

export default charReducer;