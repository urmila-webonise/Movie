import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TwentiethcenProd from "./TwentiethcenProd";
import TwentiethcenProdDetails from "./TwentiethcenProdDetails";

const TwentiethcenProdList = () => {
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
      name: " Buffy the Vampire Slayer",
      directors: "Joss Whedon",
      writers: "Joss Whedon",
      stars: " Sarah Michelle Gellar, Nicholas Brendon",
      year: "1997",
      ratings: "8.2",
      genre: "Action, Drama, Fantasy",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/0/09/Buffy_The_Vampire_Slayer_Movie.jpg",
    },
    {
      id: 2,
      name: " Titanic",
      directors: " James Cameron ",
      writers: "James Cameron",
      stars: "Leonardo DiCaprio, Kate Winslet",
      year: "1997",
      ratings: "7.8",
      genre: "Drama, Romance",
      picture: "https://m.media-amazon.com/images/I/51mTtUGvUCL.jpg",
    },
    {
      id: 3,
      name: " Deadpool ",
      directors: "Tim Miller",
      writers: "Rhett ReesePaul Wernick",
      stars: " Ryan Reynolds, Morena Baccarin",
      year: "2016",
      ratings: "8.0",
      genre: "Action, Adventure, Comedy",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png",
    },
    {
      id: 4,
      name: " Red Sparrow",
      directors: " Francis Lawrence ",
      writers: "Justin Haythe,Jason Matthews",
      stars: "Jennifer Lawrence, Joel Edgerton",
      year: "2018",
      ratings: "6.6",
      genre: "Action, Drama, Thriller",
      picture:
        "https://m.media-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_.jpg",
    },
    {
      id: 5,
      name: "Alien",
      directors: "Ridley Scott ",
      writers: "Dan O'Bannon",
      stars: " Sigourney Weaver, Tom Skerritt,",
      year: "1979",
      ratings: "8.4",
      genre: "Horror, Sci-Fi",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg",
    },
    {
      id: 6,
      name: " Le Mans '66",
      directors: "James Mangold ",
      writers: "Jez ButterworthJohn-Henry Butterworth",
      stars: " Matt Damon, Christian Bale",
      year: "2019",
      ratings: "8.1",
      genre: "Action, Biography, Drama",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/a/a4/Ford_v._Ferrari_%282019_film_poster%29.png",
    },
    {
      id: 7,
      name: " Fight Club ",
      directors: " David Fincher ",
      writers: "Chuck Palahniuk",
      stars: "Brad Pitt, Edward Norton",
      year: "1999",
      ratings: "8.8",
      genre: "Drama",
      picture:
        "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
      id: 8,
      name: " Alita: Battle Angel ",
      directors: "Robert Rodriguez ",
      writers: "James Cameron",
      stars: "Rosa Salazar, Christoph Waltz",
      year: "2019",
      ratings: "7.3",
      genre: "ction, Adventure, Sci-Fi",
      picture:
        "https://m.media-amazon.com/images/M/MV5BODMzMjlmZTYtOGU2NS00NGM2LWI4ZDItNzQzYTYwNDA2ZmU4XkEyXkFqcGdeQXRzdGFzaWVr._V1_QL75_UY281_CR11,0,500,281_.jpg",
    },
  ]);
  return (
    <>
      <Container>
        <h1 style={h1}>Twentieth Century Fox Production</h1>
        <Grid container>
          <Grid item xs={5}>
            <Box style={box}>
              <TwentiethcenProd bmovie={bmovie} />
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box style={box}>
              <Switch>
                <Route path="/details/Twentiethcen/:id">
                  <TwentiethcenProdDetails bmovie={bmovie} />
                </Route>
              </Switch>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TwentiethcenProdList;
