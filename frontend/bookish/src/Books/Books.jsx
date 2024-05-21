import { useEffect, useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { jwtDecode } from "jwt-decode";
import "./Books.css";
import Book from "./Book";
import axios from "axios";
import BookUpdate from "./BookUpdate";

export default function Books() {
  const { logout, isLoggedIn } = useAuth();
  const [role, setRole] = useState("");
  const [books, setBooks] = useState(null);
  const data = async () => {
    try {
      const response = await axios.get("http://localhost:8080/books");
      console.log(response.data);
      setBooks(response.data);
    } catch (err) {
      console.log(err, err.message);
    }
  };

  const getId = () => {
    const token = localStorage.getItem("jwtToken");
    if (token && isLoggedIn) {
      const decoded = jwtDecode(token);
      setRole(decoded.role);
    }
  };

  useEffect(() => {
    getId();
    data();
  }, []);

  return (
    <div>
      {role === "ADMIN" ? <BookList books={books} /> : <NotPermision />}
    </div>
  );
}

function BookList({ books }) {
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => {
    console.log("Opening modal for book:", book); // Debugging line
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="anunturi-container">
      <div className="anunturi-form-Container morepadding">
        <div className="books-grid">
          {books &&
            books.map((book, index) => (
              <Book key={index} onClick={() => openModal(book)} stats={book} />
            ))}
        </div>
        {selectedBook && <Modal book={selectedBook} onClose={closeModal} />}
      </div>
    </div>
  );
}

function NotPermision() {
  return (
    <div>
      <h2>You do not have permission here</h2>
    </div>
  );
}

function Modal({ onClose, book }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content updated-modal-content">
        <div className="form-for-books">
          sadsadas
          <BookUpdate book={book} />
          <button onClick={onClose}>Close</button>
        </div>
        <h2>{book.id}</h2>
      </div>
    </div>
  );
}
