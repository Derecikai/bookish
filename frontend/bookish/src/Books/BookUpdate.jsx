import { useState } from "react";
import "./Books.css";
import axios from "axios";
export default function BookUpdate({ book }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [thumb, setThumb] = useState(book.thumb);
  const [description, setDescription] = useState(book.description);
  console.log(title);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/books/${book.id}`
      );
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error, error.message);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/books/${book.id}`,
        {
          id: book.id,
          title: title,
          author: author,
          thumb: thumb,
          description: description,
        }
      );
      console.log(response.data);
      window.location.reload();
    } catch (err) {
      console.log(err, err.message);
    }
  };

  return (
    <>
      {" "}
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <input
        type="text"
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
        value={author}
      />
      <input
        type="text"
        onChange={(e) => {
          setThumb(e.target.value);
        }}
        value={thumb}
      />
      <input
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      />
      <button onClick={handleSubmit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
