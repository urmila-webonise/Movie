import React, { useEffect, useState } from "react";
import ReviewList from "./ReviewList";

const AddReview = () => {
  const [review, setReview] = useState({});
  const [reviewList, setReviewList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };
  const handleRemove = (item) => {
    const updatedReview = reviewList.filter((review) => review !== item);
    setReviewList(updatedReview);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!review.name || !review.email || !review.comment) return;
    setReview("");
    setReviewList([...reviewList, { ...review }]);
  };
  useEffect(() => {
    const ulist = JSON.parse(localStorage.getItem("users"));
    if (Array.isArray(ulist)) setReviewList(ulist);
  }, []);
  useEffect(() => {
    if (reviewList.length > 0)
      localStorage.setItem("users", JSON.stringify(reviewList));
  }, [reviewList]);

  const font = {
    color: "#fff",
    padding: "12px",
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
      <h1 style={font}>Reviews</h1>

      <label htmlFor="name" style={font}>
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required=""
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email" style={font}>
        Email:
      </label>
      <input type="email" id="email" name="email" onChange={handleChange} />
      <br />
      <label htmlFor="comment" style={font}>
        Comment:
      </label>
      <input
        type="textarea"
        id="comment"
        name="comment"
        onChange={handleChange}
      />
      <br />

      <button type="submit" style={button}>
        Submit
      </button>

      <ReviewList items={reviewList} handleRemove={handleRemove} />
    </form>
  );
};

export default AddReview;
