import { useState } from "react";
import "./Books.css";
import axios from "axios";
const genres = {
  1: "Action",
  2: "Comedy",
  3: "Drama",
  4: "Sci-Fi",
  5: "Horror",
};
export default function BookUpdate({ book }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [thumb, setThumb] = useState(book.thumb);
  const [description, setDescription] = useState(book.description);
  const [idNumber, setIdNumber] = useState(book.genreID.id);
  const [genre, setGenre] = useState(book.genreID.name);

  const handleGenreChange = (e) => {
    const selectedId = e.target.value;
    if (selectedId > 0 && selectedId < 6) {
      setIdNumber(selectedId);
      setGenre(genres[selectedId]);
    }
  };

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
          genreID: { id: idNumber, name: genre },
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
      {idNumber && genre && (
        <>
          <input type="number" onChange={handleGenreChange} value={idNumber} />
          <input type="text" value={genre} readOnly />
        </>
      )}
      <button onClick={handleSubmit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
