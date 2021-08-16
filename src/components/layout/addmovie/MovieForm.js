import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

const MovieForm = () => {
  const [movie, setMovie] = useState({});
  const [movieList, setMovieList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };
  const handleRemove = (item) => {
    const updatedMovie = movieList.filter((movie) => movie !== item);
    setMovieList(updatedMovie);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !movie.name ||
      !movie.dname ||
      !movie.sname ||
      !movie.rname ||
      !movie.gname
    )
      return;
    setMovie("");
    setMovieList([...movieList, { ...movie }]);
  };
  useEffect(() => {
    const ulist = JSON.parse(localStorage.getItem("users"));
    if (Array.isArray(ulist)) setMovieList(ulist);
  }, []);
  useEffect(() => {
    if (movieList.length > 0)
      localStorage.setItem("users", JSON.stringify(movieList));
  }, [movieList]);

  const font = {
    color: "#fff",
    padding: "15px",
  };
  const style = {
    margin: "auto",
    width: "900px",
  };
  const button = {
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "20px",
    margin: "20px",
    padding: "10px",
  };
  return (
    <form onSubmit={handleSubmit} style={style}>
      <h1 style={font}>Movie</h1>

      <label htmlFor="name" style={font}>
        Name:
      </label>
      <input type="text" id="name" name="name" onChange={handleChange} />
      <br />

      <label htmlFor="dname" style={font}>
        Director:
      </label>
      <input type="text" id="dname" name="dname" onChange={handleChange} />
      <br />

      <lable htmlFor="sname" style={font}>
        Stars:
      </lable>
      <input type="text" id="sname" name="sname" onChange={handleChange} />
      <br />

      <label htmlFor="rname" style={font}>
        Ratings:
      </label>
      <input type="number" id="rname" name="rname" onChange={handleChange} />
      <br />
      <lable htmlFor="gname" style={font}>
        Genre:
      </lable>
      <input type="text" id="gname" name="gname" onChange={handleChange} />
      <br />

      <button type="submit" style={button}>
        Add Movie
      </button>

      <hr />
      <MovieList items={movieList} handleRemove={handleRemove} />
    </form>
  );
};

export default MovieForm;
