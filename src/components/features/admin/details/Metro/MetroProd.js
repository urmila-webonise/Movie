import React from "react";
import { Link } from "react-router-dom";
const MetroProd = ({ bmovie }) => {
  const link = {
    color: "#fff",
    textDecoration: "none",
  };
  return (
    <>
      <h3>Movies</h3>
      <ul>
        {Array.isArray(bmovie) &&
          bmovie.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`/details/Metro/${movie.id}`} style={link}>
                  {movie.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default MetroProd;
