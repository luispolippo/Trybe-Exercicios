import charAPI from "../services/charAPI"; 

export const REQUEST_CHAR = 'REQUEST_CHAR';
export const GET_CHAR = 'GET_CHAR';
export const FAILED_REQUEST = 'FAILED_REQUEST';

const getChar = (character) => ({
  type: GET_CHAR, loading: false, character
})

const requestChar = (charName) => ({
  type: REQUEST_CHAR, loading: true, charName
})

const failedRequest = (error) => ({
  type: FAILED_REQUEST, loading: false, error
})

export const fetchCharacters = (charName) => {
  return (dispatch) => {
    dispatch(requestChar(charName));
    return charAPI(charName)
      .then(
        (char) => dispatch(getChar(char)),
        (error) => dispatch(failedRequest(error)),
      )
  }
}