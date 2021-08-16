import React, { useEffect, useState } from "react";
import BrandList from "./BrandList";

const BrandForm = () => {
  const [brand, setBrand] = useState({});
  const [brandList, setBrandList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBrand({ ...brand, [name]: value });
  };
  const handleRemove = (item) => {
    const updatedBrand = brandList.filter((brand) => brand !== item);
    setBrandList(updatedBrand);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!brand.name || !brand.sname || !brand.rname) return;
    setBrand("");
    setBrandList([...brandList, { ...brand }]);
  };
  useEffect(() => {
    const ulist = JSON.parse(localStorage.getItem("users"));
    if (Array.isArray(ulist)) setBrandList(ulist);
  }, []);
  useEffect(() => {
    if (brandList.length > 0)
      localStorage.setItem("users", JSON.stringify(brandList));
  }, [brandList]);

  const font = {
    color: "#fff",
    padding: "15px",
  };
  const button = {
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "20px",
    margin: "20px",
    padding: "10px",
  };
  return (
    <form onSubmit={handleSubmit} style={{ margin: "auto", width: "900px" }}>
      <h1 style={font}>Brand</h1>

      <label htmlFor="name" style={font}>
        Brand Name:
      </label>
      <input type="text" id="name" name="name" onChange={handleChange} />
      <br />

      <lable htmlFor="sname" style={font}>
        Founder:
      </lable>
      <input type="text" id="sname" name="sname" onChange={handleChange} />
      <br />

      <label htmlFor="rname" style={font}>
        Ratings:
      </label>
      <input type="number" id="rname" name="rname" onChange={handleChange} />
      <br />

      <button type="submit" style={button}>
        Add Brand
      </button>

      <hr />
      <BrandList items={brandList} handleRemove={handleRemove} />
    </form>
  );
};

export default BrandForm;
