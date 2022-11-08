import React, { useState } from "react";
import "./NoteInput.css";

const NoteInput = ({ createNote, addCount }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [task, setTask] = useState("");

  const changenoteHandle = (e) => {
    e.preventDefault();
    setNoteTitle(e.target.value);
  };

  const changeHandle = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(noteTitle, task);
    createNote([noteTitle, task]);
    setNoteTitle("");
    setTask("");
  };

  return (
    <div>
      <div className="input">
        <form className="NoteInput" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-title"
            placeholder="Enter a Title"
            id="noteTitle"
            name="noteTitle"
            value={noteTitle}
            onChange={changenoteHandle}
          />
          <textarea
            className="input-task"
            placeholder="Enter a Task"
            id="task"
            name="task"
            value={task}
            onChange={changeHandle}
          ></textarea>
          <button className="btn" type="submit" onClick={addCount}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default NoteInput;
