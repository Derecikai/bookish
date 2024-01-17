import React, { useEffect } from 'react'
import './Anunt.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { HiUser } from "react-icons/hi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { FcKey } from "react-icons/fc";
import { BsCalendar2Date } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";


// Aici doar primim de la Anunturi niste date prin propuri si le randam cu niste css

const Anunt = (item) => {
  // console.log(item.data.id);
  // console.log(item.data)

     const timestamp = item.data.exchangeDate;
const date = new Date(timestamp);



const formattedDate = date.toLocaleDateString();





  return (
    <a href={`/anunturi/${item.data.id}`} className='anunt'>

     
      
      <div className='first-book'>

           <div className='left-part'>
    {<img className='book1-pic' src={item.data.bookID1.thumb} alt="picbook1" />}
    <div classname="text-left-part" >{item.data.bookID1.title}</div>
           </div>

       <div className='right-part'> 
        <div>
        <HiUser className='user-logo' />
        {item.data.ownerID?.username}
        </div>
          <h5>
            <FcKey className='book-condition-logo' />
            Conditie: {item.data.condition}</h5>
            <FaRegCalendarAlt className='book-date-logo'/>
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