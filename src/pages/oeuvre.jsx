import React, { useState } from "react";

import Book from "../components/book";

const livres = [
  {
    imageUrl:
      "https://jean-neymar.netlify.app/static/media/cover0.240e1126.jpg",
    title: "Après coup, Jean rigole",
  },
  {
    imageUrl:
      "https://jean-neymar.netlify.app/static/media/cover1.9f367c22.jpg",
    title: "Des vacances aux Bahamas",
  },
  {
    imageUrl:
      "https://jean-neymar.netlify.app/static/media/cover2.55ab26d3.jpg",
    title: "Il me reste encore un œil",
  },
];

function Oeuvre() {
  const [books, setBooks] = useState(livres);
  const [activeParagraph, setActiveParagraph] = useState(null);

  return (
    <div className="oeuvre">
      <h1>Ma vie, mon oeuvre</h1>
      <div className="card">
        {books.map((book, index) => {
          return (
            <Book
              key={index}
              imageUrl={book.imageUrl}
              title={book.title}
              onMouseEnter={() => setActiveParagraph(index)}
              onMouseLeave={() => setActiveParagraph(null)}
            />
          );
        })}
      </div>
      <div className="text_p_oeuvre">
        <p className={`text1 ${activeParagraph === 0 ? "active" : ""}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          obcaecati quasi vel sed voluptate officia commodi, incidunt odit
          consectetur, sint voluptatibus nihil? Aspernatur enim, autem impedit
          sapiente eligendi velit. Pariatur.
        </p>
        <p className={`text2 ${activeParagraph === 1 ? "active" : ""}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          obcaecati quasi vel sed voluptate officia commodi, incidunt odit
          consectetur, sint voluptatibus nihil?
        </p>
        <p className={`text3 ${activeParagraph === 2 ? "active" : ""}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          obcaecati quasi vel sed voluptate officia commodi, incidunt odit
          consectetur, sint voluptatibus nihil? Aspernatur enim, autem impedit
          sapiente eligendi velit. Pariatur.
        </p>
      </div>
    </div>
  );
}

export default Oeuvre;
