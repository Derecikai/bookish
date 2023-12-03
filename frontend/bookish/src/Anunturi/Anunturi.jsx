import React, { useEffect,useState } from 'react'
import './Anunturi.css'
import Anunt from './Anunt';
import { Link,useNavigate } from 'react-router-dom';
import PleaseLogin from "../PleaseLogIn";

const Anunturi = () => {
   
  const navigate = useNavigate();
  
  const [auth, setAuth] = useState(false);


  useEffect (() =>{

    const flo = localStorage.getItem('jwtToken');

    if(flo){
      setAuth(true);
    }

  },[])


   return auth ? (
    <div className='anunturi-container'>
      <div className='anunturi-form-Container'>
        <Anunt />
        <Anunt />
        <Anunt />
        <Anunt />
        <Anunt />
        <Anunt />
      </div>
    </div>
  ) : (
    // Redirect to login if not authenticated
     <PleaseLogin />
  );
};

export default Anunturi