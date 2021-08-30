import React from "react";
import "./MovieForm.css";
const MovieList = ({ items, handleRemove }) => {
  const button = {
    backgroundColor: "#000",
    color: "#fff",
    margin: "10px",
    padding: "5px",
  };
  return (
    <>
      {Array.isArray(items) &&
        items.map((item, i) => {
          return (
            <div key={i} className="container">
              <h4>Movie Name:{item.name}</h4>
              <h4>Director:{item.dname}</h4>
              <h4>Stars:{item.sname}</h4>
              <h4>Ratings:{item.rname}</h4>
              <h4>Genre:{item.gname}</h4>
              <h4>
                <button onClick={() => handleRemove(item)} style={button}>
                  Remove
                </button>
              </h4>
            </div>
          );
        })}
    </>
  );
};

export default MovieList;
