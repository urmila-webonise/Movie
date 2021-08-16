import React, { useState } from "react";
import Brands from "./Brands";

const BrandDemo = () => {
  const [brands, setBrands] = useState([
    {
      title: "Bhansali Productions",
      avatar: "./images/BhansaliProductions.jpg",
    },
    {
      title: "Columbia Pictures",
      avatar: "./images/ColumbiaPictures.jpg",
    },
    {
      title: "Dream Works",
      avatar: "./images/DreamWorks.jpg",
    },
    {
      title: "Eros International",
      avatar: "./images/ErosInternational.jpg",
    },
    {
      title: "Good Universe",
      avatar: "./images/GoodUniverse.jpg",
    },
    {
      title: "Metro-Goldwyn-Mayer",
      avatar: "./images/Metro-Goldwyn-Mayer.jpg",
    },
    {
      title: "Paramount Pictures",
      avatar: "./images/ParamountPictures.jpg",
    },
    {
      title: "Tri Star Pictures",
      avatar: "./images/TriStarPictures.jpg",
    },
    {
      title: "Twentieth Century Fox",
      avatar: "./images/TwentiethCenturyFox.jpg",
    },
    {
      title: "universal",
      avatar: "./images/universal.jpg",
    },
    {
      title: "UTV Motions",
      avatar: "./images/UTVMotions.jpg",
    },
    {
      title: "WaltDisney Pictures",
      avatar: "./images/WaltDisneyPictures.jpg",
    },
    {
      title: "Warner Bros",
      avatar: "./images/WarnerBros.jpg",
    },
    {
      title: "Yash Raj Films",
      avatar: "./images/YashRajFilms.jpg",
    },
    {
      title: "Legendary",
      avatar: "./images/Legendary.jpg",
    },
    {
      title: "NewLine Cinema",
      avatar: "./images/NewLineCinema.jpg",
    },
  ]);

  return (
    <div>
      <Brands brands={brands} />
    </div>
  );
};

export default BrandDemo;
