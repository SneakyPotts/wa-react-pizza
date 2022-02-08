import {GET_DATA} from "../type";

const initialState = {
  data: []
}

export const homeReducer = (state = initialState, {type, payload}) => {
  switch (type){
    case GET_DATA:
      return {
        ...state,
        data: payload
      }
    default:
      return state;
  }
}

export default homeReducer;