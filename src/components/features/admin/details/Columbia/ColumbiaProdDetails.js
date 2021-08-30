import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddReview from "../../../../layout/review/AddReviews";

const ColumbiaProdDetails = ({ bmovie }) => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    for (const p of bmovie)
      if (p.id == id) {
        setDetails(p);
        break;
      }
  }, [id]);
  const img = {
    height: "200px",
    width: "200px",
  };
  return (
    <>
      <div>
        <h2>Movie Details</h2>
        <img src={details.picture} style={img} />
        <h3>Name : {details.name}</h3>
        <h3>Directors : {details.directors}</h3>
        <h3>Writers : {details.writers}</h3>
        <h3>Stars : {details.stars}</h3>
        <h3>Year : {details.year}</h3>
        <h3>Ratings : {details.ratings}</h3>
        <h3>Genre : {details.genre}</h3>
      </div>
      <div>
        <AddReview />
      </div>
    </>
  );
};

export default ColumbiaProdDetails;
