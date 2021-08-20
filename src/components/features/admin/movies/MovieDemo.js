import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Movies from "./Movies";

const MovieDemo = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Article 15",
      avatar: "./images/Article15.jpg",
      director: "Anubhav Sinha",
      stars: "Ayushmann Khurran, Nassara",
      ratings: 8.2,
      genre: "Action",
    },
    {
      id: 2,
      title: "3 Idiots",
      avatar: "./images/3Idiots.jpg",
      director: "Rajkumar Hirani",
      stars: "Aamir Khan, Madhavan,Sharman",
      ratings: 8.4,
      genre: "Comedy",
    },
    {
      id: 3,
      title: "Bahubali 2",
      avatar: "./images/Bahubali2.jpg",
      director: "S.S. Rajamouli",
      stars: "Prabhas,Anushka Shetty",
      ratings: 8.2,
      genre: "Action",
    },
    {
      id: 4,
      title: "Dangal",
      avatar: "./images/Dangal.jpg",
      director: "Nitesh Tiwari",
      stars: "Aamir Khan,Fatima Shaikh",
      ratings: 8.4,
      genre: "Drama",
    },
    {
      id: 5,
      title: "Dear Zindagi",
      avatar: "./images/DearZindgi.jpg",
      director: "Gauri Shinde",
      stars: "Alia Bhatt,Shah Rukh Khan",
      ratings: 7.5,
      genre: "Drama",
    },
    {
      id: 6,
      title: "Dil Dhadakne Do",
      avatar: "./images/DilDhadakneDo.jpg",
      director: "Zoya Akhtar",
      stars: "Anil Kapoor,Shefali Shah",
      ratings: 6.9,
      genre: "Drama",
    },
    {
      id: 7,
      title: "Ginny Weds Sunny",
      avatar: "./images/GinnyWedsSunny.jpg",
      director: "Puneet Khanna",
      stars: "Yami Gautam,Vikrant Massey",
      ratings: 5.7,
      genre: "Comedy",
    },
    {
      id: 8,
      title: "Gunjan Saxena",
      avatar: "./images/GunjanSaxena.jpg",
      director: "Sharan Sharma",
      stars: "Janhvi Kapoor,Pankaj Tripathi",
      ratings: 5.3,
      genre: "Drama",
    },
    {
      id: 9,
      title: "Haseen Dilruba",
      avatar: "./images/HaseenDilruba.jpg",
      director: "Vinil Mathew",
      stars: "Taapsee Pannu,Vikrant Massey",
      ratings: 6.9,
      genre: "Drama",
    },
    {
      id: 10,
      title: "Jagame Thandhiram",
      avatar: "./images/JagameThandhiram.jpg",
      director: "Karthik Subbaraj",
      stars: "Dhanush,Aishwarya ",
      ratings: 6,
      genre: "Action",
    },
    {
      id: 11,
      title: "Ludo",
      avatar: "./images/Ludo.jpg",
      director: "Anurag Basu",
      stars: "Pankaj Tripathi,Abhishek B.",
      ratings: 7.6,
      genre: "Drama",
    },
    {
      id: 12,
      title: "Mimi",
      avatar: "./images/mimi.jpg",
      director: "Laxman Utekar",
      stars: "Kriti Sanon,Pankaj Tripathi",
      ratings: 8.2,
      genre: "Drama",
    },
    {
      id: 13,
      title: "Miss India",
      avatar: "./images/MissIndia.jpg",
      director: "Narendra Nath",
      stars: "Keerthy Suresh,Naveen Chandra ",
      ratings: 3.6,
      genre: "Drama",
    },
    {
      id: 14,
      title: "Roohi",
      avatar: "./images/Roohi.jpg",
      director: "Hardik Mehta",
      stars: "Rajkummar Rao,Janhvi Kapoor",
      ratings: 4.3,
      genre: "Comedy",
    },
    {
      id: 15,
      title: "Taree Zameen Per",
      avatar: "./images/TareeZameenPer.jpg",
      director: "Aamir Khan",
      stars: "Darsheel Safary,Aamir Khan,",
      ratings: 8.4,
      genre: "Drama",
    },
    {
      id: 16,
      title: "Zindagi Na Milegi Dobara",
      avatar: "./images/ZindagiNaMilegiDobara.jpg",
      director: "Zoya Akhtar",
      stars: "Hrithik Roshan,Katrina Kaif",
      ratings: 8.2,
      genre: "Drama",
    },
  ]);
  const [ratings, setRatings] = useState(true);

  const handleRating = () => {
    if (ratings) {
      let high = movies.sort((a, b) => a.ratings - b.ratings);
      setGenre(high);
    } else {
      let low = movies.sort((a, b) => b.ratings - a.ratings);
      setGenre(low);
    }
    setRatings(!ratings);
  };
  const [genre, setGenre] = useState(movies);
  const filterMoviesByGenre = (gen) => {
    const filteredMovies = movies.filter((movie) => movie.genre === gen);
    setGenre(filteredMovies);
  };

  return (
    <div>
      <div style={{ marginLeft: "500px" }}>
        <Button variant="outlined" color="primary" onClick={handleRating}>
          {ratings ? "Low " : "High "}ratings
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => filterMoviesByGenre("Comedy")}
        >
          Comedy
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => filterMoviesByGenre("Action")}
        >
          Action
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => filterMoviesByGenre("Drama")}
        >
          Drama
        </Button>
      </div>

      <Movies movies={genre} />
    </div>
  );
};

export default MovieDemo;
