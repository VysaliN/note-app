import React from "react";
import "./NoteRight.css";

const NoteRight = ({ right }) => {
  return (
    <div>
      <h4>
        Welcome <span>admin</span>
      </h4>
      <h3 className="right-title">{right[0]}</h3>
      <h6 className="right-date">{right[1]}</h6>
      <p className="right-task">{right[2]}</p>
    </div>
  );
};

export default NoteRight;
