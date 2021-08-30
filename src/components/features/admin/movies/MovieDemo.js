import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Movies from "./Movies";

const MovieDemo = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Article 15",
      avatar:
        "https://m.media-amazon.com/images/M/MV5BZTI2NTFiMDMtZjQxNS00YjBkLWFhNWMtOTIyMzE5Yjc0ZTZiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      director: "Anubhav Sinha",
      stars: "Ayushmann Khurran, Nassara",
      ratings: 8.2,
      genre: "Action",
    },
    {
      id: 2,
      title: "3 Idiots",
      avatar:
        "https://feeds.abplive.com/onecms/images/uploaded-images/2021/05/18/bf98799be8cdafe11bc649f3b6182fc3_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
      director: "Rajkumar Hirani",
      stars: "Aamir Khan, Madhavan,Sharman",
      ratings: 8.4,
      genre: "Comedy",
    },
    {
      id: 3,
      title: "Bahubali 2",
      avatar:
        "https://rukminim1.flixcart.com/image/416/416/j95y4cw0/poster/r/s/h/large-movie-bahubali-2-posters-on-large-print-36x24-inches-original-imaew4jdf6rs9hdk.jpeg?q=70",
      director: "S.S. Rajamouli",
      stars: "Prabhas,Anushka Shetty",
      ratings: 8.2,
      genre: "Action",
    },
    {
      id: 4,
      title: "Dangal",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg",
      director: "Nitesh Tiwari",
      stars: "Aamir Khan,Fatima Shaikh",
      ratings: 8.4,
      genre: "Drama",
    },
    {
      id: 5,
      title: "Dear Zindagi",
      avatar: "https://im.rediff.com/movies/2016/oct/19dear-zindagi.jpg",
      director: "Gauri Shinde",
      stars: "Alia Bhatt,Shah Rukh Khan",
      ratings: 7.5,
      genre: "Drama",
    },
    {
      id: 6,
      title: "Dil Dhadakne Do",
      avatar:
        "https://www.koimoi.com/wp-content/new-galleries/2018/06/things-siblings-will-totally-relate-movie-dil-dhadakne-0001.jpg",
      director: "Zoya Akhtar",
      stars: "Anil Kapoor,Shefali Shah",
      ratings: 6.9,
      genre: "Drama",
    },
    {
      id: 7,
      title: "Ginny Weds Sunny",
      avatar:
        "https://m.media-amazon.com/images/M/MV5BOTU2Mjc4YWUtMjkzNC00ZDQ5LTkzZmYtOTMyY2NkODU4ZmU2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      director: "Puneet Khanna",
      stars: "Yami Gautam,Vikrant Massey",
      ratings: 5.7,
      genre: "Comedy",
    },
    {
      id: 8,
      title: "Gunjan Saxena",
      avatar:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQz1QWpKg8AF9Kz4XyA3iBJr6eO6-H4w70HbsRwJKtBPxrO7eHP",
      director: "Sharan Sharma",
      stars: "Janhvi Kapoor,Pankaj Tripathi",
      ratings: 5.3,
      genre: "Drama",
    },
    {
      id: 9,
      title: "Haseen Dilruba",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/3/30/Haseen_Dillruba_film_poster.jpg",
      director: "Vinil Mathew",
      stars: "Taapsee Pannu,Vikrant Massey",
      ratings: 6.9,
      genre: "Drama",
    },
    {
      id: 10,
      title: "Jagame Thandhiram",
      avatar:
        "https://m.media-amazon.com/images/M/MV5BM2UwNGNjMWEtMGI2My00YzI3LTljMDEtYTFhYzM3YWMyMzNmXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
      director: "Karthik Subbaraj",
      stars: "Dhanush,Aishwarya ",
      ratings: 6,
      genre: "Action",
    },
    {
      id: 11,
      title: "Ludo",
      avatar:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTMVa41j75lbnd4VZcLLzl6L4eYKUBijJ8mQELU27AwJ4kLAND5",
      director: "Anurag Basu",
      stars: "Pankaj Tripathi,Abhishek B.",
      ratings: 7.6,
      genre: "Drama",
    },
    {
      id: 12,
      title: "Mimi",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx39Bfk75GTlY4zQgIgt1eE66M3HvyzUUA_aVPahhpx9DSYL2g",
      director: "Laxman Utekar",
      stars: "Kriti Sanon,Pankaj Tripathi",
      ratings: 8.2,
      genre: "Drama",
    },
    {
      id: 13,
      title: "Miss India",
      avatar:
        "https://m.media-amazon.com/images/M/MV5BY2RlOWVmOTgtOGExMC00M2Y0LTgwNDUtOTYwZjg4N2UwZjNjXkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_.jpg",
      director: "Narendra Nath",
      stars: "Keerthy Suresh,Naveen Chandra ",
      ratings: 3.6,
      genre: "Drama",
    },
    {
      id: 14,
      title: "Roohi",
      avatar:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRjnT3OJOow-OPPp04H8_EAiiyTrFzbrzhHEPIyPnhdY-AmOPA",
      director: "Hardik Mehta",
      stars: "Rajkummar Rao,Janhvi Kapoor",
      ratings: 4.3,
      genre: "Comedy",
    },
    {
      id: 15,
      title: "Taree Zameen Per",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/b/b4/Taare_Zameen_Par_Like_Stars_on_Earth_poster.png",
      director: "Aamir Khan",
      stars: "Darsheel Safary,Aamir Khan,",
      ratings: 8.4,
      genre: "Drama",
    },
    {
      id: 16,
      title: "Zindagi Na Milegi Dobara",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo_6kHpQIkMHu0BT_AFh3XU6vBkv-Wg7Y-JJbL7I79ozwNa-1i",
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
