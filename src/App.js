import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import Container from './components/container/Container';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/board" component={Container} />
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
