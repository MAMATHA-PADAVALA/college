import "./styles/App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./login";

function App() {
  return (
    <>
      <header className="App-header">
        <h1>College Directory Management System</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/login" Component={Login}></Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
