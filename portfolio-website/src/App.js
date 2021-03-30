import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from 'react-router-dom';
import { Button } from '@material-ui/core';
import Home from './Pages/Home'

export default function App() {
  return (
    <Router>
      <div>
        <Button>
          <Link to="/home">About</Link>
        </Button>
        <Button>
          <Link to="/about">About</Link>
        </Button>
        <Button>
          <Link to="/projects">Projects</Link>
        </Button>
        
        <Switch>
          <Route path="/about">
          </Route>
          <Route path="/projects">
          </Route>
          <Route path="/">
              <Home />
          </Route>
          <Route path="*">
              <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
