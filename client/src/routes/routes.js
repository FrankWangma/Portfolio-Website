import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import ProjectPage from "../pages/ProjectPage/ProjectPage";

const paths = {
  MAINPAGE: "/",
  PROJECTPAGE: "/projects"
};

const Routes = () => {

  return (
    <Switch>
      <Route exact path={paths.MAINPAGE} component={MainPage} />
      <Route exact path={paths.PROJECTPAGE} component={ProjectPage} /> 
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
