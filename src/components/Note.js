import React, { useState } from "react";
import "./Note.css";
import { MdStar, MdDelete, MdEdit } from "react-icons/md";

const Note = ({
  noteTitle,
  task,
  id,
  removeNote,
  updateNote,
  setRight,
  searchTitle,
  starIncrement,
  starDecrement,
  deleteIncrement,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(noteTitle);
  const [editTask, setEditTask] = useState(task);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()},
  ${current.getHours()}:${current.getMinutes()}`;

  const handleUpdate = (e) => {
    e.preventDefault();
    updateNote(id, editTitle, editTask);
    setIsEditing(false);
  };
  return (
    <div>
      {isEditing ? (
        <div key="editing">
          <form className="note-edit-form" onSubmit={handleUpdate}>
            <input
              type="text"
              className="edit-title"
              name="noteTitle"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Edit the Title"
            />
            <textarea
              name="task"
              className="edit-task"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
              placeholder="Edit the Task"
            ></textarea>

            <button
              className="save"
              onClick={() => setRight([editTitle, date, editTask])}
            >
              Save
            </button>
          </form>
        </div>
      ) : searchTitle == "" ? (
        <div className="Note-task">
          <div className="title">
            <div
              className="add-title"
              onClick={() => setRight([noteTitle, date, task])}
            >
              {noteTitle}
            </div>
            <div className="btn-note">
              <MdStar
                style={{
                  color: isActive ? "rgb(66, 66, 66)" : " ",
                }}
                className="imp-icon"
                size="1.5em"
                onClick={() => {
                  isActive ? starDecrement() : starIncrement();
                  handleClick();
                }}
              />

              <MdEdit
                onClick={() => setIsEditing(true)}
                className="edit-icon"
                size="1.5em"
              />
              <MdDelete
                onClick={() => {
                  setRight("");
                  removeNote();
                  deleteIncrement();
                }}
                className="delete-icon"
                size="1.5em"
              />
            </div>
          </div>
          <div
            className="add-task"
            onClick={() => setRight([noteTitle, date, task])}
          >
            {task}
          </div>
          <div className="date">{date}</div>
        </div>
      ) : (
        noteTitle === searchTitle && (
          <div className="Note-task">
            <div className="title">
              <div
                className="add-title"
                onClick={() => setRight([noteTitle, date, task])}
              >
                {noteTitle}
              </div>
              <div className="btn-note">
                <MdStar
                  style={{
                    color: isActive ? "rgb(66, 66, 66)" : " ",
                  }}
                  className="imp-icon"
                  size="1.5em"
                  onClick={() => {
                    isActive ? starDecrement() : starIncrement();
                    handleClick();
                  }}
                />

                <MdEdit
                  onClick={() => setIsEditing(true)}
                  className="edit-icon"
                  size="1.5em"
                />
                <MdDelete
                  onClick={() => {
                    setRight("");
                    removeNote();
                    deleteIncrement();
                  }}
                  className="delete-icon"
                  size="1.5em"
                />
              </div>
            </div>

            <div
              className="add-task"
              onClick={() => setRight([noteTitle, date, task])}
            >
              {task}
            </div>
            <div className="date">{date}</div>
          </div>
        )
      )}
    </div>
  );
};

export default Note;
