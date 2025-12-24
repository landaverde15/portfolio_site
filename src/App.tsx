import React from 'react';
import './App.css';
import Landing from './Pages/Landing';
import Header from './ReusableComponents/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Landing></Landing>
      </div>
    </div>
  );
}

export default App;
