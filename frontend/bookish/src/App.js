// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
         <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
