import {useEffect,useState} from 'react'
import PleaseLogin from '../PleaseLogIn';
import './DetaliAnunt.css';
import axios from 'axios';
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { HiUser } from "react-icons/hi";

const DetaliAnunt = () => {
  const [info, setInfo] = useState(null);
  const [auth, setAuth] = useState(false);



   useEffect ( () =>{

 const anuntData = async () =>{
      try{

      const response = await axios.get('http://localhost:8080/exchanges/all')
      console.log(response.data[0])
      setInfo(response.data[0]);
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

const timestamp = info?.exchangeDate;
const date = new Date(timestamp);



const formattedDate = date.toLocaleDateString();

 return auth ? (
   <div className='anunturi-container1'>
      <div className='anunturi-form-Container2'>
        <div className='schimb-container'>
          <div className='left-exchange'>

            <div className='first-part-exchange'>
             <h2>{info?.ownerID.username} Has:</h2>
              {<img className='details-pic' src={info?.bookID1?.thumb} alt="" />}
              <h2>{info?.bookID1?.title}</h2>
              <h4>Conditie: {info?.condition}</h4>
              <h4>{formattedDate}</h4>
            </div>
              
              <HiOutlineSwitchHorizontal className='arrow-details' />

              <div className='second-part-exchange'>
                <h2>{info?.ownerID.username} Wants:</h2>
              {<img className='details-pic' src={info?.bookID2?.thumb} alt="" />}
              <h2>{info?.bookID2?.title}</h2>
              <h4 className='default'>Status: {info?.condition}</h4>
              <h4 className='default'>{formattedDate}</h4>
              </div>


          </div>

        <div className='right-info-user'>
           <div className='user-details-info'>
        <HiUser />
        {info?.ownerID?.username}
        </div
        ><h1 >Status:{info?.status}</h1>
         <button className='action-but'>Make exchange</button>
        
          </div>


        </div>
      </div>
 </div>
 )
 :
 (
<PleaseLogin />
 );
}

export default DetaliAnunt