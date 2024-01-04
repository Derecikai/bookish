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
      <div className='profile-select-cont'>
            <div className='profile-pers'>
              <div className='personal-profile-pic'></div>
             <Link className='personal-profile-link' to={`/profile/${persData}`}>Profile</Link>
            </div>
            <div className='profile-pers'>
              <div className='personal-dashboard-pic'></div>
             <Link className='personal-dashboard-link' to={`/dashboard/${persData}`}>Dashboard</Link>
            </div>
            </div>
    </div>
    </div>
  ) : (
   <PleaseLogin />
  )
}

export default Personal