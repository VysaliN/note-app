import React, { useState } from "react";
import NoteInput from "./NoteInput";
import Note from "./Note";
import { useSelector, useDispatch } from "react-redux";
import { addNote, removeNote, updateNote } from "../redux/action";
import "./NotesList.css";
import NoteRight from "./NoteRight";
import Search from "./Search";

const NotesList = () => {
  const [right, setRight] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [time, setTime] = useState([]);
  const [countStar, setCountStar] = useState(0);
  const [countDelete, setCountDelete] = useState(0);
  const [count, setCount] = useState(0);

  const deleteIncrement = () => {
    setCountDelete(countDelete + 1);
  };
  const starIncrement = () => {
    setCountStar(countStar + 1);
  };
  const starDecrement = () => {
    setCountStar(countStar - 1);
  };

  const add = () => {
    setCount(count + 1);
  };

  const state = useSelector((state) => ({ ...state.notes }));
  let dispatch = useDispatch();

  const create = (newNote) => {
    console.log(newNote);
    dispatch(addNote(newNote));
  };
  const update = (id, updatedTitle, updatedTask) => {
    dispatch(updateNote({ id, updatedTitle, updatedTask }));
  };

  return (
    <div className="notesapp">
      <div className="left">
        <h1>Notes</h1>
        <div className="all">All ({count})</div>
        <div className="starred"> Starred({countStar})</div>
        <div className="delete">Deleted({countDelete})</div>
      </div>

      <div className="center">
        <Search setSearchTitle={setSearchTitle} searchTitle={searchTitle} />

        <h3>All Notes</h3>
        <div className="NoteList">
          <NoteInput createNote={create} addCount={add} />
        </div>

        <div className="list">
          <div className="notesList">
            {state.notes &&
              state.notes.map((note) => {
                return (
                  <div key={note.id} className="note1">
                    <Note
                      key={note.id}
                      id={note.id}
                      task={note.task}
                      noteTitle={note.noteTitle}
                      removeNote={() => {
                        if (window.confirm("Confirm Delete")) {
                          dispatch(removeNote(note));
                        }
                      }}
                      updateNote={update}
                      setRight={setRight}
                      searchTitle={searchTitle}
                      setTime={setTime}
                      time={time}
                      starIncrement={starIncrement}
                      starDecrement={starDecrement}
                      deleteIncrement={deleteIncrement}
                      right={right}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="right">
        <NoteRight right={right} />
      </div>
    </div>
  );
};

export default NotesList;
