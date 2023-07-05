import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Pages/Home';
import PixconnNavbar from './Components/Pages/Navbar';

function App() {
  return (
<Router>
<div style={{maxWidth:'100vw'}}>
  <PixconnNavbar />
  <Routes>
  <Route exact path="/" element={<Home />} />
  </Routes>
  </div>
</Router>
  );
}

export default App;
