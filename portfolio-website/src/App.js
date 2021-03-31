import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Pages/Home'
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar SidebarNames={['Home', 'About Me', 'Projects']} Links={['/', '/about','/projects']}/>
        
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

export default App;