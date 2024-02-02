import React from "react";
import { Link } from "react-router-dom";

function Book({ imageUrl, title, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="card_book"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <Link to="/books/2">
        <img src={imageUrl} alt="card" />
      </Link>
      <h3>{title}</h3>
    </div>
  );
}

export default Book;
