import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
export const AuthContext = createContext();


//aici avem un context care tine tokenu si state-ul pentru logged in
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jwtToken'));

  // useEffect(() => {
  //   const token = localStorage.getItem("jwtToken");
  //   if(token){
  //     // suntem logati
  //     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  //   } else {
  //     // nu mai suntem logati
  //     delete axios.defaults.headers.common["Authorization"]
  //   }
  // }, [isLoggedIn]);
  
  const login = (token) => {
    localStorage.setItem('jwtToken', token);
    setIsLoggedIn(true);
  };

  const logout = () => {
   
    localStorage.removeItem('jwtToken');
    setIsLoggedIn(false);

  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
