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
      <Sidebar SidebarNames={['Home', 'About Me', 'Projects']} Links={['/', '/about','/projects']}/>
      <div>
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