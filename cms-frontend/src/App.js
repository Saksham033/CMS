import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home'; // Placeholder for Home page
import NewClaim from './pages/NewClaim'; // Placeholder for New Claim page
import Admin from './pages/Admin'; // Placeholder for Admin page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new-claim" element={<NewClaim />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
