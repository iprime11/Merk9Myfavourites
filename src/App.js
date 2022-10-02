import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Music: [
    { name: "Lose Yourself", Directer: "by enimen", rating: "5/5" },
    { name: "Naruto", Directer: "by kishimoto", rating: "4/5" },
    { name: "Venom", Directer: "by eminem", rating: "4/5" }
  ],

  Games: [
    { name: "Valorant", Directer: "Riot", rating: "5/5" },
    { name: "Apex Legends", Directer: "EA Sports", rating: "4/5" },
    { name: "Among US", Directer: "Games", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Music");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ fontFamily: "cursive" }}> My Favorites</h1>
      <p style={{ fontFamily: "cursive", fontSize: "13px" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              fontFamily: "cursive",
              fontSize: "18px",
              fontWeight: "500",
              background: "#E5E7EB",
              borderRadius: "12px",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div
                style={{
                  fontSize: "larger",
                  padding: "0.5 erm 1erm",
                  fontFamily: "cursive"
                }}
              >
                {" "}
                {book.name}{" "}
              </div>
              <div
                style={{
                  fontSize: "18px",
                  padding: "0.5 erm 1erm",
                  fontFamily: "cursive"
                }}
              >
                {" "}
                {book.Directer}{" "}
              </div>
              <div
                style={{
                  fontSize: "smaller",
                  paddingTop: "8px",
                  fontFamily: "cursive"
                }}
              >
                {" "}
                {book.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
