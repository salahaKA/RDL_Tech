// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./components/Home"; // Remove or comment out this line
import Login from "./components/Login"; // Ensure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        {/* Remove or comment out this route if Home is not needed */}
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
