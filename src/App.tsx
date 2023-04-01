import React from 'react';
import './App.css';
import Landing from './Pages/Landing';
import Skills from './Pages/Skills';
import AboutMe from './Pages/AboutMe';
import Work from './Pages/Work';
import LetsConnect from './Pages/LetsConnect';

function App() {
  return (
    <div className="App">
      <Landing />
      <AboutMe />
      <Skills />
      <Work />
      <LetsConnect/>
    </div>
  );
}

export default App;
