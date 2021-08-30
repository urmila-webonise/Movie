import React, { useState } from "react";
import Brands from "./Brands";

const BrandDemo = () => {
  const [brands, setBrands] = useState([
    {
      title: "Bhansali Productions",
      avatar:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/29.jpg",
      founder: "Sanjay Leela Bhansali ",
      year: 1996,
    },
    {
      title: "Columbia Pictures",
      avatar:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/3.jpg",
      founder: "Jack and Harry Cohn",
      year: 1918,
    },
    {
      title: "Dream Works",
      avatar:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/4.jpg",
      founder: " Steven Spielberg,Jeffrey",
      year: 1994,
    },
    {
      title: "Eros International",
      avatar:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/20-1.jpg",
      founder: "Kishore Lulla",
      year: 1977,
    },
    {
      title: "Good Universe",
      avatar:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/10.jpg",
      founder: "Joe Drake,Nathan Kahane",
      year: 2012,
    },
    {
      title: "Metro-Goldwyn-Mayer",
      avatar:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/8.jpg",
      founder: "Marcus Loew",
      year: 1924,
    },
    {
      title: "Paramount Pictures",
      avatar:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/6.jpg",
      founder: "Adolph Zukor",
      year: 1912,
    },
    {
      title: "Tri Star Pictures",
      avatar:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/9.jpg",
      founder: " Victor Kaufman ",
      year: 1982,
    },
    {
      title: "Twentieth Century Fox",
      avatar:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/7.jpg",
      founder: "William Fox",
      year: 1915,
    },
    {
      title: "universal",
      avatar:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/1.jpg",
      founder: "Carl Laemmle",
      year: 1912,
    },
    {
      title: "UTV Motions",
      avatar:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/28.jpg",
      founder: "Ronnie & Zarina Screwvala ",
      year: 1996,
    },
    {
      title: "WaltDisney Pictures",
      avatar:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/5.jpg",
      founder: " Walt and Roy O",
      year: 1023,
    },
    {
      title: "Warner Bros",
      avatar:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/2.jpg",
      founder: "ack,Albert Warner",
      year: 1923,
    },
    {
      title: "Yash Raj Films",
      avatar:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/15.jpg",
      founder: "Yash Chopra",
      year: 1970,
    },
    {
      title: "Legendary",
      avatar:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/13.jpg",
      founder: "Thomas Tull",
      year: 2000,
    },
    {
      title: "NewLine Cinema",
      avatar:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700/https://www.designhill.com/design-blog/wp-content/uploads/2019/04/12.jpg",
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
