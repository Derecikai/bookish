import React from 'react'
import './DashAnunt.css'
import { HiUser } from 'react-icons/hi'
import {HiOutlineSwitchHorizontal} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { HiOutlineBackspace } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { HiCubeTransparent } from "react-icons/hi";
import axios from 'axios';
import { Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FcKey } from "react-icons/fc";
import { BsCalendar2Date } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";


const DashAnunt = (item) => {


  const navigate = useNavigate();
  console.log(item.data.id)
  const timestamp = item.data.exchangeDate;
const date = new Date(timestamp);

const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/exchanges/${item.data.id}`);

        // Handle success, e.g., redirect or update the UI
        console.log('Anunt deleted successfully');
        navigate('/personal')
      } 
     catch (error) {
      console.error('Error while deleting anunt', error);
    }
  };


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
     
     <div className='dash-buttons'>
     <Link className='dash-vezi' to={`/anunturi/${item.data.id}`}>Vezi Anunt < HiOutlineBookOpen className='book-dash' /> </Link>
     <Link to={`/dashedit/${item.data.id}`}className='dash-edit' >Editeaza anunt <HiCubeTransparent className='cube-dash' /> </Link>
     <Link onClick={handleDelete} className='dash-delete'>Sterge anunt <HiOutlineBackspace className='out-dash'/> </Link>
     </div>
    </a>
  
    
  )
}

export default DashAnunt