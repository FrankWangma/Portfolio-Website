import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Home from './Pages/Home'
import Sidebar from './Components/Sidebar';


const useStyles = makeStyles((theme) => ({
  shiftTextLeft: {
    marginLeft: '0px'
  },
  shiftTextRight: {
    marginLeft: 240,
  }
}));


const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)
  const classes = useStyles();
  return (
    <Router>
      <Sidebar SidebarNames={['Home', 'About Me', 'Projects']} Links={['/', '/about','/projects']}/>
      <div className={isDrawerOpen ? classes.shiftTextRight : classes.shiftTextLeft}>
        <Switch>
          <Route path="/about">
          </Route>
          <Route path="/projects">
          </Route>
          <Route path="/" component={Home} />
          <Route path="*" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;