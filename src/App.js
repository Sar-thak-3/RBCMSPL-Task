import './App.css';
import Newsdata from "./components/Newsdata";
import Credential from './components/Credential';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Newsdata />
          </Route>
          <Route exact path="/news">
            <Newsdata />
          </Route>
          <Route exact path="/login">
            <Credential />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
