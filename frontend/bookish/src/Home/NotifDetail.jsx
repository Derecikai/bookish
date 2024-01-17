import React from 'react'
import './NotifDetail.css'
import { IoIosNotifications } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import axios from 'axios';

const NotifDetail = (data) => {

 console.log(data.data)
 
 const updatenotif = () =>{
    try{
      const response = axios.put(`http://localhost:8080/notifications/read?id=${data.data.id}`);
      console.log("succseful sent");
      window.location.reload();
    }
    catch(err){

    }
 } 

 console.log(data.data)

  return (
    <div className='notif-afis'>
     <h5 className='notif-message'>{data.data.message}</h5>
     <MdDelete onClick={updatenotif} className='bell-botif'/>
     </div>
    
  )
}

export default NotifDetail