import React from 'react';
import Pages from './pages';

// styles
import GlobalStyle from './components/GlobalStyle';

// routes
import Routes from './pages';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Pages />
    </div>
  );
}

export default App;