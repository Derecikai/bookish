// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Anunturi from './Anunturi/Anunturi';
import DetaliAnunt from './DetaliiAnunt/DetaliAnunt';
import Adauga from './Adauga/Adauga';
import Dashboard from './Dashboard/Dashboard';


//Aici avem rutele si componentele specifice pt ele

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/anunturi" element={<Anunturi />} />
        <Route path="/anunturi/:id" element={<DetaliAnunt />} />
        <Route path="/adauga" element={<Adauga />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
