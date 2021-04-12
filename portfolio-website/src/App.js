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
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import HomeIcon from '@material-ui/icons/Home';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [user, setUser] = useState(null)
  const classes = useStyles();

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/frankwangma')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }
  
  if(!user) {
    return (<div />)
  }
  return (
    <Router>
      <Sidebar SidebarNames={['Home', 'About Me', 'Projects']} Links={['/', '/about','/projects']}  SidebarIcons={[<HomeIcon />, <PermIdentityIcon />, <AccountTreeIcon />]} isDrawerOpen={isDrawerOpen} handleDrawerToggle={handleDrawerToggle}/>
      <div className={classes.offset}>
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon 
              style={{ color: 'white' }}
              fontSize='large'
            />
          </IconButton>
        <Switch>
          <Route path="/about" component={ () => <About user={user} />} />
          <Route path="/projects" component={Projects}/>
          <Route path="/" component={Home} />
          <Route path="*" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;