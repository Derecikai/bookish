// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Anunturi from "./Anunturi/Anunturi";
import DetaliAnunt from "./DetaliiAnunt/DetaliAnunt";
import Adauga from "./Adauga/Adauga";
import Dashboard from "./Dashboard/Dashboard";
import Personal from "./Personal/Personal";
import DashEdit from "./Dashboard/DashEdit";
import Profile from "./Profile/Profile";
import Bookshelf from "./Bookshelf/Bookshelf";
import WishList from "./WishList/WishList";
import Home from "./Home/Home";
import ChatRoom from "./ChatRoom/ChatRoom";
import Books from "./Books/Books";
import CheckUsers from "./Users/Users";

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
        <Route path="/personal" element={<Personal />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/dashedit/:id" element={<DashEdit />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/bookshelf/:id" element={<Bookshelf />} />
        <Route path="/profile/wishlist/:id" element={<WishList />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/chatroom/:id" element={<ChatRoom />} />
        <Route path="/books" element={<Books />} />
        <Route path="/users" element={<CheckUsers />} />

        {/* /chatroom/${persdata.sub} */}
      </Routes>
    </Router>
  );
};

export default App;
