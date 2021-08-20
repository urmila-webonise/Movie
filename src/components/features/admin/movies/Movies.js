import React, { useState } from "react";
import MovieForm from "../../../layout/addmovie/MovieForm";
import "./Movies.css";

const Movies = (props) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div style={{ marginLeft: "540px", marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ height: "30px", width: "300px" }}
        />
      </div>
      <div>
        {props.movies
          .filter((item) => {
            if (!search) return true;
            if (item.title.includes(search)) {
              return true;
            }
            return false;
          })
          .map((item) => (
            <div className="container2">
              <h4>{item.title}</h4>
              <img src={item.avatar} alt="movie"></img>
              <h4>Director: {item.director}</h4>
              <h4>Stars: {item.stars}</h4>
              <h4>Ratings: {item.ratings}</h4>
              <h4>Genre: {item.genre}</h4>
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
