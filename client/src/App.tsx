import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
