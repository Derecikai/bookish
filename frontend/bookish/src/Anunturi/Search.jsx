import React, { useState } from 'react';
//aici avem searchbar componenta si luam un filter cu un query si dam query in DB cu acel query si afisam rezultatele la ce am gasit(query-urile pot fi id title isbn sau author)
const SearchBar = ({ onSelectBook }) => {
  const [filter, setFilter] = useState('id'); // Default filter
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/books?${filter}=${query}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log(results);


 const handleSelectBook = (book) => {
    // Pass the selected book to the parent component
    onSelectBook(book);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Filter by:
          <select value={filter} onChange={handleFilterChange}>
            <option value="id">ID</option>
            <option value="title">Title</option>
            <option value="isbn">ISBN</option>
            <option value="author">Author</option>
          </select>
        </label>
        <input type="text" value={query} onChange={handleQueryChange} />
        <button type="submit">Search</button>
      </form>

      {/* Display search results */}
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            {/* Display book information here */}
            <p>ID: {result.id}</p>
            <img src={result.thumb} alt="" />
            <p>Title: {result.title}</p>
            <p>ISBN: {result.isbn}</p>
            <p>Author: {result.author}</p>
            <button type="button" onClick={() => handleSelectBook(result)}>
              Select Book
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;