import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <div className="app">
      <Navigation />

      <div className="content">
        <Content />
      </div>
      
      <Footer />

    </div>
  );
}

export default App;
