import React from "react";
import BrandForm from "../../../layout/addbrand/BrandForm";

import "./Brands.css";
const Brands = (props) => {
  return (
    <>
      <div>
        {props.brands.map((brand, index) => (
          <div key={brand.title + index} className="container1">
            <h4>{brand.title}</h4>
            <img src={brand.avatar} alt="brand"></img>
            <h4>Founder :{brand.founder}</h4>
            <h4>Year :{brand.year}</h4>
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
