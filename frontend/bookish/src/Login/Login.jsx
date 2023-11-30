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


import * as yup from 'yup';

const Login = () => {
const navigate = useNavigate();

  //  const { setprofileData } = useUser();
  
  //  const { login, isLoggedIn } = useAuth();

  const schema = yup.object().shape({
   username: yup.string().required("Your Username is required!"),
   
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

      // Make a POST request to your login endpoint
      const response = await axios.get('http://localhost:8080/api/v1/auth/authenticate');
     console.log(response.data);


         if (response.data) {

        navigate('/profile'); // Redirect to the desired location
        setPass(false);

         } 
    } catch (error) {

       setLoading(false); // Set loading to false in case of an error
      console.error('Error during login:', error);
    }
  };
  



  return (
    <div className='login-container'>
      
      <div className='login-form-Container'>
        
        <form className='login_form' 
     onSubmit={handleSubmit(onSubmit)}>


     <p >Username or Email</p>

    <input  type='text' placeholder='UserName' {...register("username")} />

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