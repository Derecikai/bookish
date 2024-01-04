import React,{useEffect,useState} from 'react'
import './Personal.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext'
import PleaseLogin from "../PleaseLogIn";
import { jwtDecode } from 'jwt-decode';

const Personal = () => {

   const {logout, isLoggedIn} = useAuth();
   const [persData,setPersData] = useState(null);

  useEffect(() => {
    const getId = () => {
      const token = localStorage.getItem('jwtToken');
      if (token && isLoggedIn) {
        const decoded = jwtDecode(token);
        setPersData(decoded.sub);
      }
    };

    getId();

    // Log persData after setting the state
    console.log(persData);
  }, [isLoggedIn]);
 

   


  return isLoggedIn ? (
    <div className='anunturi-pers-container'>
    <div className='anunturi-form-pers-Container'>
            <div className='profile-pers'>
             <Link to={"/profile"}>Profile</Link>
            </div>
            <div>
             <Link to={`/dashboard/${persData}`}>Dashboard</Link>
             <>{persData}</>
            </div>
    </div>
    </div>
  ) : (
   <PleaseLogin />
  )
}

export default Personal