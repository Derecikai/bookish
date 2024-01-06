import React, { useEffect, useState } from 'react';
import './WishList.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookDetailsModal from '../Bookshelf/BookDetailsModal';

const WishList = () => {

  const {id} = useParams();
  const [data,setData] = useState(null);
  const [selectedBook,setSelectedBook] = useState(null);
  const [newBookId, setNewBookId] = useState('');


  useEffect(() =>{

   const getdata = async () =>{

    try{
   const response = await axios.get(`http://localhost:8080/profiles/wishlist/${id}`);
    console.log(response.data)
    setData(response.data);

      }catch(err)
{

}

   }

getdata();
  },[])
  
 const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  const addBook = async () => {
 try {
      const response = await axios.post('http://localhost:8080/profiles/wishlist/add', {
        bookID: newBookId,
        userID: id,
      });

      // Assuming the response contains updated bookshelf data
      // setData(response.data);
      setNewBookId(''); // Clear the input field after successful addition
    } catch (err) {
      console.error(err);
    }
  }



  // if(!data){
  //  return ( <div>Data loading cuh</div>)
  // }


  return (
    <div className='anunturi-bookshelf-container'>
     <div className='anunturi-form-bookshelf-Container'>

   <div><input
            type="text"
            placeholder='Type book id to add'
            value={newBookId}
            onChange={(e) => setNewBookId(e.target.value)}
          /> 
          <button onClick={addBook}>Add book to WishList</button></div>
<div className="bookshelf">
      {data && data.map((book) => (
        <div key={book.id} className="book" onClick={() => openModal(book)}>
         <img className='bookshelf-img'  src={book.thumb} alt="" />
       
          
         
        </div>
      ))}
    </div>

    {selectedBook && (
          <BookDetailsModal book={selectedBook} onClose={closeModal} />
        )}


     </div>
    </div>
  )
}

export default WishList