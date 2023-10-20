import React from 'react';
import './App.css';
import Landing from './Pages/Landing';
import Services from './Pages/Services';
import Work from './Pages/Work';
import LetsConnect from './Pages/LetsConnect';

function App() {
  return (
    <div className="App">
      <Landing />
      <Services />
      <Work />
      <LetsConnect/>
    </div>
  );
}

export default App;
