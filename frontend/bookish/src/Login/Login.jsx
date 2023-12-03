import './Login.css';
import React from 'react'
import { useState } from 'react';
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from "react-hook-form";
import axios from 'axios';
// import { useAuth } from '../../AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import _debounce from 'lodash/debounce';
// import { useUser } from '../../UserContext';
import { useAuth } from '../Contexts/AuthContext';

import * as yup from 'yup';

const Login = () => {

    const { login } = useAuth();
  
const navigate = useNavigate();

  //  const { setprofileData } = useUser();
  
  //  const { login, isLoggedIn } = useAuth();

  const schema = yup.object().shape({
   email: yup.string().required("Your email is required"),
   
   password: yup.string().min(4).max(100).required("A Password is needed at least 4 cahracters"),
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
    setLoading(true); // Set loading to true while making the request

    // Make a POST request to your login endpoint
    const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
      password: formData.password,
      email: formData.email,
    });

    if (response.data && response.data.token) {
      // Assuming your token is in response.data.token
      // Save the token or perform any other actions
      console.log('Login successful. Token:', response.data.token);
      
      // Save the token to local storage
      login(response.data.token)

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
    <div className='login-container'>
      
      <div className='login-form-Container'>
        
        <form className='login_form' 
     onSubmit={handleSubmit(onSubmit)}>


     <p >Email</p>

    <input  type='text' placeholder='Email' {...register("email")} />

    <p >{errors.username?.message}</p>

   
<p >Password</p>

    <input  type='password' placeholder='Password...' {...register("password")}  />

    <p >{errors.password?.message}</p>

    <Link to = "/signup" >Don't have an account, Sign Up</Link>

    <input type='submit' />
   
   {loading && <div >Loading...</div>}

   {pass && <h1  >Password or Username inccorect</h1>}
    </form>
        
        </div>
      
      
      </div>
  )
}

export default Login