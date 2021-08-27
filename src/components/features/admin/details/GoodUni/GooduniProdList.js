import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import GooduniProd from "./GooduniProd";
import GooduniProdDetails from "./GooduniProdDetails";

const GooduniProdList = () => {
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
      name: "Don't Breathe ",
      directors: "Fede Alvarez",
      writers: "Fede Alvarez",
      stars: "Stephen Lang, Jane Levy",
      year: "2016",
      ratings: "7.1",
      genre: " Crime, Horror, Thriller",
      picture:
        "https://m.media-amazon.com/images/M/MV5BZGI5ZTU2M2YtZWY4MC00ZDFhLTliYTItZTk1NjdlN2NkMzg2XkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_.jpg",
    },
    {
      id: 2,
      name: "Rocketman ",
      directors: "Dexter Fletcher",
      writers: "Lee Hall",
      stars: "Taron Egerton, Jamie Bell",
      year: "2019",
      ratings: "7.3",
      genre: "Biography, Drama, Music",
      picture:
        "https://cdn.shopify.com/s/files/1/0969/9128/products/Rocketman_-_Taron_Egerton_is_Elton_John_-_Hollywood_Musical_English_Movie_Poster_f5ec6c61-4445-4ead-8855-6079f61f89b2.jpg?v=1581576468",
    },
    {
      id: 3,
      name: "Snowpiercer ",
      directors: "Bong Joon Ho ",
      writers: "Jacques Lob",
      stars: "Chris Evans, Jamie Bell",
      year: "2013",
      ratings: "7.1",
      genre: "Action, Drama, Sci-Fi",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/b/b4/Snowpiercer_poster.jpg ",
    },
    {
      id: 4,
      name: "Good Boys",
      directors: "Gene Stupnitsky",
      writers: "Lee Eisenberg",
      stars: "Jacob Tremblay, Keith",
      year: "2019",
      ratings: "6.7",
      genre: "Adventure, Comedy",
      picture:
        "https://www.uphe.com/sites/default/files/styles/scale__344w_/public/GoodBoys_PosterArt_191329086902.png",
    },
    {
      id: 5,
      name: "Blockers ",
      directors: "Kay Cannon",
      writers: "Brian Kehoe",
      stars: "Leslie Mann, John Cena,",
      year: "2018",
      ratings: "6.2",
      genre: "Comedy",
      picture:
        "https://m.media-amazon.com/images/M/MV5BMjE0ODIzNjkzMl5BMl5BanBnXkFtZTgwODQ3MzU4NDM@._V1_.jpg",
    },
    {
      id: 6,
      name: "Long Shot ",
      directors: "Jonathan Levine ",
      writers: "Dan Sterling",
      stars: "Charlize Theron, Seth",
      year: "2019",
      ratings: "Comedy, Romance",
      genre: "6.8",
      picture:
        "https://m.media-amazon.com/images/M/MV5BMmE4Mzk0OWQtMDI1OS00NDU3LWI2M2YtNzc1MGMxZGI3ZTE1XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg",
    },
    {
      id: 7,
      name: "2:22 ",
      directors: "Paul Currie",
      writers: "Todd Stein",
      stars: " Michiel Huisman, Teresa Palmer",
      year: "2017",
      ratings: "5.8",
      genre: "Drama, Mystery,",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/6/66/2%2C22_2017_Film_Poster.jpg",
    },
    {
      id: 8,
      name: " The Disaster Artist",
      directors: "James Franco",
      writers: "Scott Neustadter",
      stars: "James Franco, Dave Franco,",
      year: "2017",
      ratings: "7.4",
      genre: "Biography, Comedy",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/c/c9/TheDisastorArtistTeaserPoster.jpg",
    },
  ]);
  return (
    <>
      <Container>
        <h1 style={h1}>Good Universe Production</h1>
        <Grid container>
          <Grid item xs={5}>
            <Box style={box}>
              <GooduniProd bmovie={bmovie} />
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box style={box}>
              <Switch>
                <Route path="/details/Gooduni/:id">
                  <GooduniProdDetails bmovie={bmovie} />
                </Route>
              </Switch>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default GooduniProdList;
