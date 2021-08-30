import React from "react";
import "./BrandForm.css";

const BrandList = ({ items, handleRemove }) => {
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
              <h4>Brand Name:{item.name}</h4>
              <h4>Founder:{item.sname}</h4>
              <h4>Year:{item.rname}</h4>
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

export default BrandList;
