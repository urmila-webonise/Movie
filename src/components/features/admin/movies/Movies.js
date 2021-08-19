import React from "react";
import MovieForm from "../../../layout/addmovie/MovieForm";
import "./Movies.css";

const Movies = (props) => {
  return (
    <>
      <div>
        {props.movies.map((movie, index) => (
          <div key={movie.title + index} className="container2">
            <h4>{movie.title}</h4>
            <img src={movie.avatar} alt="movie"></img>
            <h4>Director: {movie.director}</h4>
            <h4>Stars: {movie.stars}</h4>
            <h4>Ratings: {movie.ratings}</h4>
            <h4>Genre: {movie.genre}</h4>
          </div>
        ))}
      </div>

      <div>
        <MovieForm />
      </div>
    </>
  );
};

export default Movies;
