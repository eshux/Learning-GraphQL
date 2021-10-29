import React from 'react';
import './styles/main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Queries from './pages/Queries';
import Header from './components/Header/Header';
import Mutations from './pages/Mutations';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/queries">
        <Queries />
      </Route>
      <Route path="/mutations">
        <Mutations />
      </Route>
    </Switch>

  </Router>
);

export default App;
