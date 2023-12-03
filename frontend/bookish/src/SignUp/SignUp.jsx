import React from 'react'
import { useState } from 'react';
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from "react-hook-form";
import axios from 'axios';
// import { useAuth } from '../../AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../Login/Login.css'
import * as yup from 'yup';
import './SignUp.css';

const SignUp = () => {

const navigate = useNavigate();

  //  const { setprofileData } = useUser();
  
  //  const { login, isLoggedIn } = useAuth();

  const schema = yup.object().shape({
   username: yup.string().required("Your Username is required!"),
   
   password: yup.string().min(4).max(100).required("A Password is needed at least 4 cahracters"),

   email: yup.string().email().required("Your email is required"),

   fullName: yup.string().required("Your FullName is required!"),

   profilePicture: yup.string().required("Your Picture is required"),

   bio: yup.string().required("Your Bio is required"),

   location: yup.string().required("Please insert your location"),


  });


   const [loading, setLoading] = useState(false); // Add loading state
   const [pass, setPass] = useState(false)// Pass state where we check the password and username 

   

   
const {register, handleSubmit, formState:{errors} } = useForm(
  {
    resolver: yupResolver(schema),
  }
);





 
const onSubmit = async (formData) => {
    try {
       
      const newData = {
        ...formData,
         privacySettings: "default",
         role: "USER",
      }
      // Make a POST request to your login endpoint
      const response = await axios.post('http://localhost:8080/api/v1/auth/register',
       newData);

     console.log(response.data);

        if (response.data && response.data.token) {
      // Assuming your token is in response.data.token
      // Save the token or perform any other actions
      console.log('Login successful. Token:', response.data.token);
      // Redirect the user or perform any other actions
      navigate('/anunturi'); // Change '/dashboard' to your desired route
    } else {
      console.error('Login failed. Unexpected response:', response);
      // Handle unsuccessful login (e.g., show an error message)
      setPass(true); // Set pass state to true for indicating incorrect login
    }
  } catch (error) {
    setLoading(false); // Set loading to false in case of an error
    console.error('Error during login:', error);
    // Handle error, show user-friendly message or redirect to an error page
  }
  };




  return (
    <div className='signup-container'>
     <div className='signup-form-Container'>

<form className='signup_form' 
     onSubmit={handleSubmit(onSubmit)}>


     <p >Username</p>

    <input  type='text' placeholder='UserName' {...register("username")} />

    <p >{errors.username?.message}</p>

<p >Password</p>

    <input  type='password' placeholder='Password...' {...register("password")}  />

    <p >{errors.password?.message}</p>

<p >email</p>

    <input  type='text' placeholder='email' {...register("email")}  />

    <p >{errors.email?.message}</p>

<p >fullName</p>

    <input  type='text' placeholder='Fullname' {...register("fullName")}  />

    <p >{errors.fullName?.message}</p>

    <p >picturelink</p>

    <input  type='picture' placeholder='porfile-pic-link' {...register("profilePicture")}  />

    <p >{errors.profilepic?.message}</p>

    <p >bio</p>

    <textarea placeholder='bio about you' {...register("bio")}  />

    <p >{errors.bio?.message}</p>

    <p >Location</p>

    <input  type='text' placeholder='Write like this => London, England' {...register("location")}  />

    <p >{errors.location?.message}</p>


    <Link to = "/login" >Already have an account, log in</Link>

    <input type='submit' />
   
   {loading && <div >Loading...</div>}

   {pass && <h1  >Password or Username inccorect</h1>}
    </form>

     </div>
     </div>
  )
}

export default SignUp