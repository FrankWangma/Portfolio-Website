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
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }
  return (
    <Router>
      <Sidebar SidebarNames={['Home', 'About Me', 'Projects']} Links={['/', '/about','/projects']}  SidebarIcons={[<HomeIcon />, <PersonIcon />, <AccountTreeIcon />]} isDrawerOpen={isDrawerOpen} handleDrawerToggle={handleDrawerToggle}/>
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
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects}/>
          <Route path="/" component={Home} />
          <Route path="*" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;