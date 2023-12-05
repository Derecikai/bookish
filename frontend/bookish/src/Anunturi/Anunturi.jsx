import React, { useEffect,useState } from 'react'
import './Anunturi.css'
import Anunt from './Anunt';
import { Link,useNavigate } from 'react-router-dom';
import PleaseLogin from "../PleaseLogIn";
import axios from 'axios';

const Anunturi = () => {
   
  const navigate = useNavigate();
  const [info, setInfo] = useState(null);
  
  const [auth, setAuth] = useState(false);


  useEffect ( () =>{


    const anuntData = async () =>{
      try{

      const response = await axios.get('http://localhost:8080/exchanges/all')
      console.log(response.data)
      setInfo(response.data);
    }
catch(err){
   console.log("There is an error",err);
}


    }





    const flo = localStorage.getItem('jwtToken');

    if(flo){
      setAuth(true);
    }

    anuntData();


  },[])


   return auth ? (
    <div className='anunturi-container'>
      <div className='anunturi-form-Container'>
        <div className='hero slide-in'>Aici se produc schimburi de carti</div>

        {info && 
            info.map( item => (
              <Anunt data={item}/>
            ) )}
      </div>
    </div>
  ) : (
    // Redirect to login if not authenticated
     <PleaseLogin />
  );
};

export default Anunturi