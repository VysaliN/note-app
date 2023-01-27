import React from "react";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotesList from "./components/NotesList";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/noteslist" element={<NotesList />}></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
