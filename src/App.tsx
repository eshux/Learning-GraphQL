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
import Refetching from './pages/Refetching';
import Subscriptions from './pages/Subscriptions';
import Fragments from './pages/Fragments';
import Pagination from './pages/Pagination';

const client = new ApolloClient({
  uri: 'https://71z1g.sse.codesandbox.io/', // dogs
  cache: new InMemoryCache()
});

const clientMutation = new ApolloClient({
  uri: 'https://sxewr.sse.codesandbox.io/', // todo
  cache: new InMemoryCache()
});

const clientRnM = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql', // rick and morty
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
      <Route path="/refetching">
        <ApolloProvider client={client}>
          <Refetching client={client} />
        </ApolloProvider>
      </Route>
      <Route path="/subscriptions">
        <Subscriptions />
      </Route>
      <Route path="/fragments">
        <ApolloProvider client={clientRnM}>
          <Fragments />
        </ApolloProvider>
      </Route>
    </Switch>
    <Route path="/pagination">
      <ApolloProvider client={clientRnM}>
        <Pagination />
      </ApolloProvider>
    </Route>
  </Router>
);

export default App;
