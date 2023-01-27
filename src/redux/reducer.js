import * as types from "./actionTypes";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NOTE:
      const newNote = {
        id: uuidv4(),
        noteTitle: action.payload,
        task: action.payloadTask,
        completed: false,
      };
      const addedNote = [...state.notes, newNote];
      return {
        ...state,
        notes: addedNote,
      };
    case types.REMOVE_NOTE:
      const filterNote = state.notes.filter(
        (note) => note.id !== action.payload.id
      );
      return {
        ...state,
        notes: filterNote,
      };

    case types.UPDATE_NOTE:
      const updatedNote = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return {
            ...note,
            task: action.payload.updatedTask,
            noteTitle: action.payload.updatedTitle,
          };
        }
        return note;
      });
      return {
        ...state,
        notes: updatedNote,
      };

    default:
      return state;
  }
};
export default notesReducer;
