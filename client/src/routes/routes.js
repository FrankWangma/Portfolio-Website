import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";

const paths = {
  MAINPAGE: "/",
};

const Routes = () => {

  return (
    <Switch>
      <Route exact path={paths.MAINPAGE} component={MainPage} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
