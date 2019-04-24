import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/title'
import Card from './components/card'

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
      <Card />
      </div>
    </div>
  );
}

export default App;
