import React from 'react';
import Pages from './pages';

// styles
import GlobalStyle from './components/GlobalStyle';

// apollo client 
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const uri = process.env.REACT_APP_API_URI;
const cache = new InMemoryCache();

//configure apollo client
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  );
}

export default App;