import React, { useEffect, useState } from 'react';
import './Profile.css';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import Anunt from '../Anunturi/Anunt';

const Profile = () => {

const {id} = useParams();
const [profileData,setProfileData] = useState(null);
const [profileEx,setProfileEx] = useState(null);

 useEffect(() =>{

  const getdata = async () =>{

   try{

   const respone = await axios.get(`http://localhost:8080/users/exchanges/${id}`)
  console.log("This is adasdas",respone.data)
  }catch(err)
  {
   console.log("The error is",err.response.data);
   setProfileEx(err.response.data)


  }

  }

  getdata();


  const getProfile = async () =>{
   
   try{

   const respone = await axios.get(`http://localhost:8080/profiles?id=${id}`)
  console.log(respone.data)
   setProfileData(respone.data);
  }catch(err)
  {
   console.log("The error is",err);
  }

  }

  getProfile();

 },[])

// console.log(profileData.profilePicture)

if(!profileData)
return (
 <div>Waiting for data</div>
)

  return (
    <div className='anunturi-profile-container'>
     <div className='anunturi-form-profile-Container'>
      <div className='profile-data-1'>
       <img className='profile-picture' src={profileData.profilePicture} alt="" />
       <div className='profile-data-writing'>
       <h1>{profileData.username}</h1>
       <p>Bio: {profileData.bio}</p>
       <p>Location: {profileData.location}</p>
       <div className='profile-buttons'>
       <Link className='wishlist-profile'><h3>Rating</h3></Link>
       <Link className='wishlist-profile'><h3>WishList</h3></Link>
       <Link className='bookshelf-profile'><h3>Bookshelf</h3></Link>
       </div>
       </div>
       
       </div>
      <div className='profile-swaps'><h1>Swaps</h1></div>
      

          {profileEx && profileEx.map( item => (
            
              <Anunt data={item}/>
             
            ) )}
       
     
     </div>
    </div>
  )
}

export default Profile