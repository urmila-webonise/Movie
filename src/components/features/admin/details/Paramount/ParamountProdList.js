import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ParamountProd from "./ParamountProd";
import ParamountProdDetails from "./ParamountProdDetails";

const ParamountProdList = () => {
  const box = {
    color: "#fff",
    padding: 30,
    color: "#fff",
    border: "2px solid cyan",
  };
  const h1 = {
    color: "#fff",
    padding: "30px",
  };
  const [bmovie, setBmovie] = useState([
    {
      id: 1,
      name: "PAW Patrol: The Movie",
      directors: "Cal Brunker",
      writers: "Billy Frolick",
      stars: "Tyler Perry, Ron Pardo",
      year: "2021",
      ratings: "6.4",
      genre: "Animation, Adventure, Comedy",
      picture:
        "https://dx35vtwkllhj9.cloudfront.net/paramountpictures/paw-patrol-the-movie/images/regions/us/share-tout.png",
    },
    {
      id: 2,
      name: " NCIS: Naval Criminal Investigative Service",
      directors: "Donald P. Bellisario",
      writers: "Donald P. Bellisario",
      stars: "Mark Harmon, David McCallum",
      year: "2003",
      ratings: "7.7",
      genre: "Action, Crime, Drama",
      picture: "https://m.media-amazon.com/images/I/51zu0nAu06L._SY445_.jpg",
    },
    {
      id: 3,
      name: " A Quiet Place Part II ",
      directors: " John Krasinski",
      writers: "John Krasinski",
      stars: " Emily Blunt, Millicent Simmonds",
      year: "2020",
      ratings: "7.3",
      genre: "Drama, Horror, Sci-Fi",
      picture:
        "https://m.media-amazon.com/images/M/MV5BMTE2ODU4NDEtNmRjNS00OTk1LTg4NmMtNTAzYzVlNzJmYjgzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    },
    {
      id: 4,
      name: " Infinite",
      directors: " Antoine Fuqua ",
      writers: "Todd Stein",
      stars: "Mark Wahlberg, Chiwetel Ejiofor",
      year: "2021",
      ratings: "5.4",
      genre: "Action, Sci-Fi, Thriller",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Infinite_%282021_film%29_release_poster.jpeg/220px-Infinite_%282021_film%29_release_poster.jpeg ",
    },
    {
      id: 5,
      name: " No Time to Die",
      directors: "Cary Joji Fukunaga ",
      writers: "Robert Wade",
      stars: " Daniel Craig, Ana de Armas",
      year: "2021",
      ratings: "7",
      genre: "Action, Adventure, Thriller",
      picture:
        "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5de68156c283810006a3879a%2FDaniel-Craig-as-James-Bond-in--No-Time-to-Die-%2F960x0.jpg%3Ffit%3Dscale",
    },
    {
      id: 6,
      name: " The Godfather",
      directors: "Francis Ford Coppola |",
      writers: "Mario Puzo",
      stars: " Marlon Brando, Al Pacino",
      year: "1972",
      ratings: "9.2",
      genre: "Crime, Drama",
      picture:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
      id: 7,
      name: "The Good Fight",
      directors: " Michelle King",
      writers: "Michelle King",
      stars: "Christine Baranski, Sarah Steele",
      year: "2017",
      ratings: "8.3",
      genre: "Drama",
      picture:
        "https://m.media-amazon.com/images/M/MV5BMDI3OThlOTUtZGY0ZC00NmNlLTk2YTEtYjA3NjE3ODAwZjMzXkEyXkFqcGdeQXVyODM0NDY1ODY@._V1_.jpg",
    },
    {
      id: 8,
      name: "South Park",
      directors: "Trey Parker",
      writers: "Trey Parker",
      stars: "Trey Parker, Matt Stone",
      year: "1997",
      ratings: "8.7",
      genre: "Animation, Comedy",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/8/83/SouthParkbiggerlongeruncut.jpg",
    },
  ]);
  return (
    <>
      <Container>
        <h1 style={h1}>Paramount Pictures Production</h1>
        <Grid container>
          <Grid item xs={5}>
            <Box style={box}>
              <ParamountProd bmovie={bmovie} />
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box style={box}>
              <Switch>
                <Route path="/details/Paramount/:id">
                  <ParamountProdDetails bmovie={bmovie} />
                </Route>
              </Switch>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ParamountProdList;
