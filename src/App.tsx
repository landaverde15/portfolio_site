import React from 'react';
import './App.css';
import Landing from './Pages/Landing';
import Skills from './Pages/Skills';
import AboutMe from './Pages/AboutMe';
import Work from './Pages/Work';

function App() {
  return (
    <div className="App">
      <Landing />
      <AboutMe />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
