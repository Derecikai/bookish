import React, { useEffect,useState } from 'react'
import './Adauga.css';
import PleaseLogin from "../PleaseLogIn";
import SearchBar from '../Anunturi/Search';
import Form from './Form';
import axios from 'axios';
const Adauga = () => {


 const [selectedBookHave, setSelectedBookHave] = useState(null);
  const [selectedBookWant, setSelectedBookWant] = useState(null);
const [auth, setAuth] = useState(false);

  useEffect(() => {
const flo = localStorage.getItem('jwtToken');

    if(flo){
      setAuth(true);
    }
  },[])

 const handleSelectBookHave = (book) => {
    setSelectedBookHave(book);
  };

  const handleSelectBookWant = (book) => {
    setSelectedBookWant(book);
  };

  console.log("This is have",selectedBookHave,"This is want",selectedBookWant);

  const handleSubmit = async () => {
    // Check if both books are selected
    if (selectedBookHave && selectedBookWant) {
      const exchangeData = {
        bookID1: selectedBookHave.id,
        bookID2: selectedBookWant.id,
        ownerID: 1,
        exchangeDate: new Date().toISOString().split('T')[0], // Format as "YYYY-MM-DD"
       status: "Pending",
       condition: "Good",
      };
     console.log(exchangeData)
      try {
        const response = await axios.post('http://localhost:8080/exchanges/add', exchangeData, {
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
          },
        });

        console.log('Exchange submitted successfully!', response.data);
        // You may want to reset your selected books or do other actions upon success
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.warn('Please select both books before submitting');
    }
  };

  return auth ?(
    <div className='anunturi-container'>
      
      <div className='anunturi-form-Container'>
       <h1>Book you have</h1>
       <SearchBar onSelectBook={handleSelectBookHave}/>
       <h1>Book you want</h1>
       <SearchBar onSelectBook={handleSelectBookWant}/>
       <h1>If we don't have it, Add it</h1>
       <Form />
        <button onClick={handleSubmit}>Submit Exchange</button>
      </div>
      </div>
  )
  :(
   <PleaseLogin />
  )
}

export default Adauga