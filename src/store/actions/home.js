import {GET_DATA} from "../type";

export const getData = payload => {
  return {
    type: GET_DATA,
    payload
  }
}