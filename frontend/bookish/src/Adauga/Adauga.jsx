import React, { useEffect,useState } from 'react'
import './Adauga.css';
import PleaseLogin from "../PleaseLogIn";
import SearchBar from '../Anunturi/Search';
import Form from './Form';
import axios from 'axios';
// import jwt from 'jsonwebtoken';
import { jwtDecode } from 'jwt-decode';

//aici se face practic adaugare exchange urilor, se pune din DB cartea care o ai si cartea pe care vrei si dupa mai adaugi niste info 2 campuri, si dupa dai submit si ai adaugat exchange

const Adauga = () => {


 const [selectedBookHave, setSelectedBookHave] = useState(null);
  const [selectedBookWant, setSelectedBookWant] = useState(null);
  const [status, setStatus] = useState('');
  const [condition, setCondition] = useState('');
const [auth, setAuth] = useState(false);
const[userId, setUserId] = useState(false);
  useEffect(() => {
const token = localStorage.getItem('jwtToken');

    if(token){
      // const decodedToken = jwt.decode(jwtToken);
      // //Aici gen iau sub(pus de mn) din payload care ar trebui sa fie id-ul userului, ca sa pot trimite id-ul ala undeva
      // const subject = decodedToken ? decodedToken.sub : null;
       const decoded = jwtDecode(token);
       setUserId(decoded.sub);
      // console.log(subject)

      console.log(token);
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
        ownerID: userId,
        exchangeDate: new Date().toISOString().split('T')[0], // Format as "YYYY-MM-DD"
       status: status,
       condition: condition,
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
       <label htmlFor="status">Status:</label>
      <input
        type="text"
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />

      <label htmlFor="condition">Condition:</label>
      <input
        type="text"
        id="condition"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
      />
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