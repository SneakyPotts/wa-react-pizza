import {GET_DATA, GET_FILTER} from "../type";

export const getData = payload => {
  return {
    type: GET_DATA,
    payload
  }
}
export const getfilter = payload => {
  return {
    type: GET_FILTER,
    payload
  }
}