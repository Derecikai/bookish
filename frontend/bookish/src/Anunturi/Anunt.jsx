import React from 'react'
import './Anunt.css'
import { Link } from 'react-router-dom';
const Anunt = () => {
  return (
     <Link to={"/login"} className='anunt'>
    Anunt
     </Link>
  )
}

export default Anunt