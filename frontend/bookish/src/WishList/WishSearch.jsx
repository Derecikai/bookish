import React, { useState } from "react";
import { set } from "react-hook-form";
//aici avem searchbar componenta si luam un filter cu un query si dam query in DB cu acel query si afisam rezultatele la ce am gasit(query-urile pot fi id title isbn sau author)
const SearchBar = ({ onSelectBook }) => {
  const [filter, setFilter] = useState("title"); // Default filter
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [currentColor, setCurrentColor] = useState("red");
  const [carte, setCarte] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/books?${filter}=${query}`
      );
      if (!response.ok) {
        setErrorMsg("We cannot find the book you selected");
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else if (response.ok) {
        setErrorMsg("");
      }
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(results);

  const handleSelectBook = (book) => {
    // Pass the selected book to the parent component
    onSelectBook(book);
    setCarte(book);
    setCurrentColor("blue");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Filter by:
          <select value={filter} onChange={handleFilterChange}>
            <option value="title">Title</option>
            <option value="id">ID</option>
            <option value="isbn">ISBN</option>
            <option value="author">Author</option>
          </select>
        </label>
        <input type="text" value={query} onChange={handleQueryChange} />
        <button type="submit">Search</button>
      </form>
      {errorMsg ? (
        <h1>{errorMsg}</h1>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              {/* Display book information here */}
              {/* <p>ID: {result.id}</p>*/}
              <img className="image-result-search" src={result.thumb} alt="" />
              <p>Title: {result.title}</p>
              {/* /* <p>ISBN: {result.isbn}</p>
            <p>Author: {result.author}</p>  */}
              <button
                style={{
                  backgroundColor:
                    result.id === carte?.id ? currentColor : "red",
                }}
                type="button"
                onClick={() => handleSelectBook(result)}
              >
                Select Book
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
