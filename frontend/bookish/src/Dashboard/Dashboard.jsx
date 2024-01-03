import React from 'react'
import './Dashboard.css'
import DashAnunt from './DashAnunt'
import backgroundImage from './3d-33q6a18khxgta4ll.webp';

const Dashboard = () => {
 const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    /* Add other background-related styles as needed */
  };


  return (
    <div className='anunturi-dash-container'>
      <div className='anunturi-form-dash-Container'>
       <div className='dash-hero slide-in'>
           <div className='image-dash'></div><div className='text-img-dash'>Anunturile tale</div>
       </div>
        <DashAnunt />
      </div>
      </div>
  )
}

export default Dashboard