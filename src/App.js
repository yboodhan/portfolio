import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
// import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <div id="top" className="app">
        <Navigation />

        <main>
          <Content />
        </main>

      </div>
    </Router>
  )
}

export default App;
