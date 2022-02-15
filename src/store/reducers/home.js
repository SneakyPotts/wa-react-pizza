import {GET_DATA, GET_FILTER} from "../type";

const initialState = {
  data: [],
  filters: []
}

export const homeReducer = (state = initialState, {type, payload}) => {
  switch (type){
    case GET_DATA:
      return {
        ...state,
        data: payload
      }
    case GET_FILTER:
      return {
        ...state,
        filters: payload
      }
    default:
      return state;
  }
}

export default homeReducer;