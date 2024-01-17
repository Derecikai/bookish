import React, { useEffect,useState } from 'react'
import './Anunturi.css'
import Anunt from './Anunt';
import { Link ,useNavigate } from 'react-router-dom';
import PleaseLogin from "../PleaseLogIn";
import axios from 'axios';
import SearchBar from './Search';
import { IoIosArrowDropleft,IoIosArrowDropright } from "react-icons/io";
//aici avem anunturi cu pagination porning de la pagina 1 si primim data de pe  prima pagina, unde lle ducem ca prop pt anunt ca sa randeze componenta
const Anunturi = () => {

  const navigate = useNavigate();
  const [info, setInfo] = useState(null);
  const [count, setCount] = useState(1);
  const [auth, setAuth] = useState(false);


    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useState({ bookTitle: '', genre: '', location: '' });
  const [api, setApi] = useState(1);
  

   useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        let apiUrl;

        // Check if at least one of the search parameters is provided
        if (Object.values(searchParams).some(param => param !== '')) {
          const { bookTitle, genre, location } = searchParams;
          const size = 5;
          const adjustedPage = currentPage > 1 ? currentPage - 1 : 0;
          
          apiUrl = `http://localhost:8080/exchanges/search?${bookTitle ? `bookTitle=${bookTitle}&` : ''}${genre ? `genre=${genre}&` : ''}${location ? `location=${location}&` : ''}page=${0}&size=${size}`;
        } else {
        
          apiUrl = `http://localhost:8080/exchanges/get?page=${count}`;
        }

        const response = await axios.get(apiUrl);
        // const responseData = response.data;
        const responseData = response.data.content || response.data;
        console.log(response.data)

        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();


     const flo = localStorage.getItem('jwtToken');
  if (flo) {
    setAuth(true);
  }


  }, [currentPage, searchParams,count]); 

 const handleInputChange = (event) => {
  const { name, value } = event.target;
  setSearchParams((prevSearchParams) => ({
    ...prevSearchParams,
    [name]: value,
  }));
};

  


   return auth ? (
    <div className='anunturi-container'>
      <div className='anunturi-form-Container'>
        <div className='hero slide-in'>
          
          <div className='searches'>
      <input
         className=' title-search'
         type="text"
         placeholder="Search by book title"
         value={searchParams.bookTitle}
         onChange={handleInputChange}
         name="bookTitle"
/>
  <div className='two-searches'>
      <input className='input-anunt'
        type="text"
        placeholder="Location"
        value={searchParams.location}
        onChange={handleInputChange}
        name="location"
      />
      <input className='input-anunt'
        type="text"
        placeholder="Genre"
        value={searchParams.genre}
        onChange={handleInputChange}
        name="genre"
      />
    </div>
      <ul>
        
        {/* {searchResults.map((result) => (
          <li key={result.id}>{result.bookTitle} - {result.location}</li>
        ))} */}
      </ul>
    </div>
          
          
          
          
          
          
      
        <div className='buttons'>
        <IoIosArrowDropleft className='buton' onClick={() =>{
          if(count > 1 )
          (setCount(count-1))
         
          
        }}/>
        <IoIosArrowDropright className='buton' onClick={() =>{
          if(count < 5 )
          (setCount(count+1))
         
          
        }}/>
        </div>
        </div>

       

{data && 
            data.map( item => (
            
              <Anunt data={item}/>
             
            ) )}


            {/* {searchResults && searchResults.length > 0 ? (
       
        searchResults.map(item => (
          <Anunt data={item} key={item.id} />
        ))
      ) : (
    
        info && info.map(item => (
          <Anunt data={item} key={item.id} />
        ))
      )} */}
           
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



