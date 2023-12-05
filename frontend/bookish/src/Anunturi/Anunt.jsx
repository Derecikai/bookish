import React, { useEffect } from 'react'
import './Anunt.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { HiUser } from "react-icons/hi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";


const Anunt = (item) => {
  console.log(item.data.id);


     const timestamp = item.data.exchangeDate;
const date = new Date(timestamp);



const formattedDate = date.toLocaleDateString();





  return (
    <a href={`/anunturi/${item.data.id}`} className='anunt'>

     
      
      <div className='first-book'>

           <div className='left-part'>
    {<img className='book1-pic' src={item.data.bookID1.thumb} alt="picbook1" />}
    {item.data.bookID1.title}
           </div>

       <div className='right-part'> 
        <div>
        <HiUser className='user-logo' />
        {item.data.ownerID?.username}
        </div>
          <h5>Conditie: {item.data.condition}</h5>
          {formattedDate}
       
      </div>
    </div>

    <HiOutlineSwitchHorizontal className='arrow' />

     <div className='second-book'>
    {<img className='book1-pic' src={item.data.bookID2.thumb} alt="picbook2" />}
    {item.data.bookID2.title}
    </div>
     </a>
  )
}

export default Anunt