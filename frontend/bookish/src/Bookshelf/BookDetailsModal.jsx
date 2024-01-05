// BookDetailsModal.js
import React from 'react';
import './BookDetailsModal.css';

const BookDetailsModal = ({ book, onClose }) => {
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
      </div>
    </div>
  );
};

export default BookDetailsModal;