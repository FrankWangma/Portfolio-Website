import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
