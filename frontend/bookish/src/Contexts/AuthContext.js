import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jwtToken'));


  
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
