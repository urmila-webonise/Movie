import React, { useState } from "react";
import Brands from "./Brands";

const BrandDemo = () => {
  const [brands, setBrands] = useState([
    {
      title: "Bhansali Productions",
      avatar: "./images/BhansaliProductions.jpg",
      founder: "Sanjay Leela Bhansali ",
      year: 1996,
    },
    {
      title: "Columbia Pictures",
      avatar: "./images/ColumbiaPictures.jpg",
      founder: "Jack and Harry Cohn",
      year: 1918,
    },
    {
      title: "Dream Works",
      avatar: "./images/DreamWorks.jpg",
      founder: " Steven Spielberg,Jeffrey",
      year: 1994,
    },
    {
      title: "Eros International",
      avatar: "./images/ErosInternational.jpg",
      founder: "Kishore Lulla",
      year: 1977,
    },
    {
      title: "Good Universe",
      avatar: "./images/GoodUniverse.jpg",
      founder: "Joe Drake,Nathan Kahane",
      year: 2012,
    },
    {
      title: "Metro-Goldwyn-Mayer",
      avatar: "./images/Metro-Goldwyn-Mayer.jpg",
      founder: "Marcus Loew",
      year: 1924,
    },
    {
      title: "Paramount Pictures",
      avatar: "./images/ParamountPictures.jpg",
      founder: "Adolph Zukor",
      year: 1912,
    },
    {
      title: "Tri Star Pictures",
      avatar: "./images/TriStarPictures.jpg",
      founder: " Victor Kaufman ",
      year: 1982,
    },
    {
      title: "Twentieth Century Fox",
      avatar: "./images/TwentiethCenturyFox.jpg",
      founder: "William Fox",
      year: 1915,
    },
    {
      title: "universal",
      avatar: "./images/universal.jpg",
      founder: "Carl Laemmle",
      year: 1912,
    },
    {
      title: "UTV Motions",
      avatar: "./images/UTVMotions.jpg",
      founder: "Ronnie & Zarina Screwvala ",
      year: 1996,
    },
    {
      title: "WaltDisney Pictures",
      avatar: "./images/WaltDisneyPictures.jpg",
      founder: " Walt and Roy O",
      year: 1023,
    },
    {
      title: "Warner Bros",
      avatar: "./images/WarnerBros.jpg",
      founder: "ack,Albert Warner",
      year: 1923,
    },
    {
      title: "Yash Raj Films",
      avatar: "./images/YashRajFilms.jpg",
      founder: "Yash Chopra",
      year: 1970,
    },
    {
      title: "Legendary",
      avatar: "./images/Legendary.jpg",
      founder: "Thomas Tull",
      year: 2000,
    },
    {
      title: "NewLine Cinema",
      avatar: "./images/NewLineCinema.jpg",
      founder: "Robert Shaye",
      year: 1967,
    },
  ]);

  return (
    <div>
      <Brands brands={brands} />
    </div>
  );
};

export default BrandDemo;
