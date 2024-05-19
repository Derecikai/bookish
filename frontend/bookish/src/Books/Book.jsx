import React from "react";
import "./Books.css";

export default function Book({ stats, onClick, key }) {
  return (
    <div onClick={onClick} className="book-container">
      <img className="book-image-bk" src={stats.thumb} alt="" />
      <h1 className="book-title-bk">Title: {stats.title}</h1>
      <h2 className="book-author-bk">Author: {stats.author}</h2>
    </div>
  );
}
