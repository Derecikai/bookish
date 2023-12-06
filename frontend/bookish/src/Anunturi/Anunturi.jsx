import React, { useEffect,useState } from 'react'
import './Anunturi.css'
import Anunt from './Anunt';
import { Link ,useNavigate } from 'react-router-dom';
import PleaseLogin from "../PleaseLogIn";
import axios from 'axios';
import SearchBar from './Search';

const Anunturi = () => {
   
  const navigate = useNavigate();
  const [info, setInfo] = useState(null);
  const [count, setCount] = useState(1);
  const [auth, setAuth] = useState(false);


  useEffect ( () =>{


    const anuntData = async (pageNr) =>{
      try{

      const response = await axios.get('http://localhost:8080/exchanges/get',{
    params:{
      page:pageNr,
    }
  });
      // console.log("This is",response.data[2].id)
      console.log(response)
      setInfo(response.data);
    }
catch(err){
   console.log("There is an error",err);
}


    }

     const searchPagination = (pageNr) => {

  return axios.get('http://localhost:8080/exchanges/get',{
    params:{
      page:pageNr,
    }
  })
}





    const flo = localStorage.getItem('jwtToken');

    if(flo){
      setAuth(true);
    }

    anuntData(count);

  },[count])



  


   return auth ? (
    <div className='anunturi-container'>
      <div className='anunturi-form-Container'>
        <div className='hero slide-in'><SearchBar />
        <div className='buttons'>
        <button className='buton' onClick={() =>{
          if(count > 1 )
          (setCount(count-1))
        }}>pre page</button>
        <button className='buton' onClick={() =>{
          if(count < 2)
          (setCount(count+1))
        }}>next page</button>
        </div>
        </div>

        {info && 
            info.map( item => (
            
              <Anunt data={item}/>
             
            ) )}
      </div>
    </div>
  ) : (
    // Redirect to login if not authenticated
     <PleaseLogin />
  );
};

export default Anunturi


// note
/**
 * this can be moved in a separate file and the methods exported
 */


export function searchPagination(pageNr){

  return axios.get('http://localhost:8080/exchanges/get',{
    params:{
      page:pageNr,
    }
  })
}

/**
 * this is jsdoc
 * functia asta e utilizata pentru a cauta in exchanges
 * @param {{page?:number, size?:number, location?:string}} requestParams search query params
 */
export function searchExchange(requestParams){
  // 
  return axios.get('http://localhost:8080/exchanges/search',{
    params: requestParams
  })
}



