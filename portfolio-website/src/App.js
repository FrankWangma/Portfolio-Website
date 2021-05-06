import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Home from './Pages/Home'
import Sidebar from './Components/Sidebar';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import About from './Pages/About';
import Projects from './Pages/Projects';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  offset: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 240
    }
  }
}));



const App = () => {
  const classes = useStyles();
  const [user, setUser] = useState(null)

    useEffect(() => {
      fetch('https://gitconnected.com/v1/portfolio/frankwangma')
        .then(res => res.json())
        .then(user => {
          setUser(user);
        });
    }, []);

  return (
    <Router>
      <Sidebar SidebarNames={['Home', 'About Me', 'Projects']} Links={['/', '/about','/projects']}  SidebarIcons={[<HomeIcon />, <PersonIcon />, <AccountTreeIcon />]}/>
      <div className={classes.offset}>
        <Switch>
          <Route path="/about" component={() => (<About user={user} />)} />
          <Route path="/projects" component={() => (<Projects user={user} />)}/>
          <Route path="/" component={Home} />
          <Route path="*" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;