import { useEffect, useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { jwtDecode } from "jwt-decode";
import "./Books.css";
import Book from "./Book";

export default function Books() {
  const { logout, isLoggedIn } = useAuth();
  const [role, setRole] = useState("");

  const getId = () => {
    const token = localStorage.getItem("jwtToken");
    if (token && isLoggedIn) {
      const decoded = jwtDecode(token);
      setRole(decoded.role);
    }
  };

  useEffect(() => {
    getId();
  }, []);

  return <div>{role === "ADMIN" ? <BookList /> : <NotPermision />}</div>;
}

function BookList() {
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => {
    console.log("Opening modal for book:", book); // Debugging line
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  const mockBooks = [
    {
      title: "Book 1",
      author: "Author 1",
      thumb:
        "https://cdn.dribbble.com/users/7970736/screenshots/18039333/media/461df9638f63fbbcb8cb2c64af4570ab.jpg?resize=300x300&vertical=center",
    },
    {
      title: "Book 2",
      author: "Author 2",
      thumb:
        "https://cdn.dribbble.com/users/7970736/screenshots/18039333/media/461df9638f63fbbcb8cb2c64af4570ab.jpg?resize=300x300&vertical=center",
    },
    {
      title: "Book 3",
      author: "Author 3",
      thumb:
        "https://cdn.dribbble.com/users/7970736/screenshots/18039333/media/461df9638f63fbbcb8cb2c64af4570ab.jpg?resize=300x300&vertical=center",
    },
    {
      title: "Book 4",
      author: "Author 4",
      thumb:
        "https://cdn.dribbble.com/users/7970736/screenshots/18039333/media/461df9638f63fbbcb8cb2c64af4570ab.jpg?resize=300x300&vertical=center",
    },
    {
      title: "Book 5",
      author: "Author 5",
      thumb:
        "https://cdn.dribbble.com/users/7970736/screenshots/18039333/media/461df9638f63fbbcb8cb2c64af4570ab.jpg?resize=300x300&vertical=center",
    },
    {
      title: "Book 6",
      author: "Author 6",
      thumb:
        "https://cdn.dribbble.com/users/7970736/screenshots/18039333/media/461df9638f63fbbcb8cb2c64af4570ab.jpg?resize=300x300&vertical=center",
    },
    {
      title: "Book 7",
      author: "Author 7",
      thumb:
        "https://cdn.dribbble.com/userupload/14566459/file/original-20f61d7491b8d5be2f459aed441d18dd.png?resize=300x300&vertical=center",
    },
    {
      title: "Book 8",
      author: "Author 8",
      thumb:
        "https://cdn.dribbble.com/users/7970736/screenshots/18039333/media/461df9638f63fbbcb8cb2c64af4570ab.jpg?resize=300x300&vertical=center",
    },
  ];

  return (
    <div className="anunturi-container">
      <div className="anunturi-form-Container morepadding">
        <div className="books-grid">
          {mockBooks.map((book, index) => (
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
        <div>sadsadas</div>
        <h2>{book.title}</h2>
        <button>Delete</button>
        <button>Edit</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
