import React from "react";
import "./Review.css";

const ReviewList = ({ items, handleRemove }) => {
  const button = {
    backgroundColor: "#000",
    color: "#fff",
  };
  return (
    <>
      {Array.isArray(items) &&
        items.map((item, i) => {
          return (
            <div key={i} className="container">
              <h4>Name:{item.name}</h4>
              <h4>Email:{item.email}</h4>
              <h4>Comment:{item.comment}</h4>

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

export default ReviewList;
