import React, { useState } from "react";
import BrandForm from "../../../layout/addbrand/BrandForm";
import "./Brands.css";
const Brands = (props) => {
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
        {props.brands
          .filter((item) => {
            if (!search) return true;
            if (item.title.includes(search)) {
              return true;
            }
            return false;
          })
          .map((item) => (
            <div className="container1">
              <h4>{item.title}</h4>
              <img src={item.avatar} alt="brand"></img>
              <h4>Founder: {item.founder}</h4>
              <h4>Year: {item.year}</h4>
            </div>
          ))}
      </div>
      <div>
        <BrandForm />
      </div>
    </>
  );
};

export default Brands;
