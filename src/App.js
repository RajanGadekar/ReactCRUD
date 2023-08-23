import React from 'react';
import './App.css';
import Navbar from './Navbar';
import User from './User';
import Edit from './Edit';
import List from './List';
// import Model from './Model';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      {/* <Model/> */}
      <Routes>
        <Route path="/" element={<List/>}/>
        {/* <Route path="/list" element={<List/>}/>
        <Route path="/edit/:id" element={<Edit/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
