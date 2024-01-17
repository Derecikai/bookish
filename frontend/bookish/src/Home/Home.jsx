import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import NotifDetail from './NotifDetail'
import { jwtDecode } from 'jwt-decode';
import PleaseLogIn from '../PleaseLogIn';

const Home = () => {

const [auth, setAuth] = useState(null);
const [data, setData] = useState(null);
const [persdata, setPersData] = useState(null);
const [info, setInfo] = useState(null);

useEffect(() => {

 

  getId();

 getNot();

 getData();

 const flo = localStorage.getItem('jwtToken');
  if (flo) {
    setAuth(true);
  }


},[persdata])


const getId = () => {

      const token = localStorage.getItem('jwtToken');
      if (token) {
        const decoded = jwtDecode(token);
        console.log(decoded)
        setPersData(decoded.sub);
      }
    };

//Here we call the notifications api
 const getNot = async () =>
 {
  try{
     const response = await axios.get(`http://localhost:8080/notifications/${persdata}`);
     console.log(response.data);
     setData(response.data);

  }catch(err)
  {
    console.log(err);
  }
 }
 //get profile info 
 const getData = async () =>
 {
  try{
     const response = await axios.get(`http://localhost:8080/profiles?id=${persdata}`);
     console.log(response.data);
     setInfo(response.data);

  }catch(err)
  {
    console.log(err);
  }
 }

 console.log(persdata)



  return auth ? (
    <div className='anunturi-home-container'>

<div className='anunturi-form-home-Container'>
 <div className='altcv'>
   {/* {info &&<img src={info.profilePicture} alt="" />} */}
 </div>
 <div className='notificari'>
  <h3 className='not-title'>Notificari</h3>
  {data && data.map( (item) => (
   <NotifDetail key={item.id} data={item}/>
  ))}
  
  </div>
 
 </div>


    </div>
  ) : ( <PleaseLogIn />);
};

export default Home