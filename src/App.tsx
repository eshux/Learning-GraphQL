import React from 'react';
import './styles/main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Queries from './pages/Queries';
import Header from './components/Header/Header';
import Mutations from './pages/Mutations';

const client = new ApolloClient({
  uri: 'https://71z1g.sse.codesandbox.io/', // dogs
  cache: new InMemoryCache()
});

const clientMutation = new ApolloClient({
  uri: 'https://sxewr.sse.codesandbox.io/', // todo
  cache: new InMemoryCache()
});

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/queries">
        <ApolloProvider client={client}>
          <Queries />
        </ApolloProvider>
      </Route>
      <Route path="/mutations">
        <ApolloProvider client={clientMutation}>
          <Mutations />
        </ApolloProvider>
      </Route>
    </Switch>

  </Router>
);

export default App;
