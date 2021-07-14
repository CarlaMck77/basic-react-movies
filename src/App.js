import React from 'react';

//components
import Header from './components/Header';

//container
import Home from './container/Home';

//styles 
import { GlobalStyle } from './GlobalStyle'

//using jsx
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
