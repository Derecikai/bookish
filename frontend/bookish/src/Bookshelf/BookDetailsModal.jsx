// BookDetailsModal.js
import React, { useState } from 'react';
import './BookDetailsModal.css';
import axios from 'axios';


const BookDetailsModal = ({ book, onClose }) => {



  const [data,setData] = useState(null) 

  const getRec = async () =>{
    try{
      //pune api-ul tau aici cu book.title sau book.id sau dupa ce iti trebe sa cauti
      //foloseste `` nu "" sau '' ca sa poti sa scri gen get${book.title} in endpoint
      //dupa vezi ce iti scrie in c ${book.title}
      const response = await axios.get(`http://localhost:8080/ai/generate?message=${book.title}`)
      console.log(response)
      setData(response.data.generation)
    }catch(err)
    {
      console.log(err);
    }
  }



  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
       <img className='modal-picture' src={book.thumb} alt="" />
        <h2 className='modal-title'>Title: {book.title}</h2>
        <p>Author: {book.author}</p>
        <p className='modal-desc'>Description: {book.description}</p>
        <p>ISBN: {book.isbn}</p>

        {/* Add more book details as needed */}
        <button onClick={onClose}>Close</button>
        <button onClick={getRec}>Get recomandation</button>
        <p>{data && data}</p>
      </div>
    </div>
  );
};

export default BookDetailsModal;