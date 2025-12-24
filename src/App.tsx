import React from 'react';
import './App.css';
import Landing from './Pages/Landing';
import Header from './ReusableComponents/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Routes>
            <Route path="/" element={<Landing/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
