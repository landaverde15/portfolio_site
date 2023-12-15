import React from 'react';
import './App.css';
import Landing from './Pages/Landing';
import Header from './ReusableComponents/Header';
import { Route, Routes } from 'react-router-dom';
import Work from './Pages/Work';
import Uses from './Pages/Uses';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/work" element={<Work/>}></Route>
            <Route path="/uses" element={<Uses/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
