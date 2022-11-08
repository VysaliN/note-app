import * as types from "./actionTypes";

export const addNote = (note) => ({
  type: types.ADD_NOTE,
  payload: note[0],
  payloadTask: note[1],
});
export const removeNote = (note) => ({
  type: types.REMOVE_NOTE,
  payload: note,
});
export const updateNote = (note) => ({
  type: types.UPDATE_NOTE,
  payload: note,
});
