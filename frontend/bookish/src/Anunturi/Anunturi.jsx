import React from 'react'
import './Anunturi.css'
import Anunt from './Anunt';
import { Link } from 'react-router-dom';

const Anunturi = () => {
  return (
    <div className='anunturi-container'>
      
      <div className='anunturi-form-Container'>
  
        <Anunt />
        <Anunt /> 
        <Anunt />  
        <Anunt />   
        <Anunt />   
        <Anunt /> 
      </div>
      </div>
  )
}

export default Anunturi