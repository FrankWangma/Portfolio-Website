import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/projects">
            <ProjectPage />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
