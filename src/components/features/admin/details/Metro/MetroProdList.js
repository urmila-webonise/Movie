import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import MetroProd from "./MetroProd";
import MetroProdDetails from "./MetroProdDetails";

const MetroProdList = () => {
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
      name: "Snake Eyes",
      directors: " Robert Schwentke",
      writers: "Evan Spiliotopoulos",
      stars: " Henry Golding, Andrew Koji",
      year: "2021",
      ratings: "5.4",
      genre: " Action, Adventure, Fantasy",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/d/da/Snake_Eyes_G.I._Joe_Origins_Movie_Poster.jpg",
    },
    {
      id: 2,
      name: " Wrath of Man",
      directors: " Guy Ritchie",
      writers: "Nicolas Boukhrief",
      stars: " Jason Statham, Holt McCallany",
      year: "2021",
      ratings: "7.2",
      genre: " Action, Crime, Thriller",
      picture:
        "https://m.media-amazon.com/images/M/MV5BODZkODFjYzktODk4YS00N2VmLWFjZWYtZDA2MDRlMmRhYmZlXkEyXkFqcGdeQXVyMzM5ODg4ODc@._V1_.jpg",
    },
    {
      id: 3,
      name: "Respect ",
      directors: "Liesl Tommy",
      writers: "Tracey Scott Wilson",
      stars: "Jennifer Hudson, Forest Whitaker,",
      year: "2021",
      ratings: "7.0",
      genre: "Biography, Drama, Music",
      picture:
        " https://m.media-amazon.com/images/M/MV5BYzAyYjA0OWMtOTI1OS00MWU1LTlhMWQtZGE0NjFmMzc1ZTI0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    },
    {
      id: 4,
      name: "Candyman",
      directors: "Nia DaCosta ",
      writers: "Jordan Peele",
      stars: " Yahya Abdul-Mateen II, Teyonah Parris",
      year: "2021",
      ratings: "6.6",
      genre: "Horror,Thriller",
      picture:
        "https://cdn.vox-cdn.com/thumbor/DE6P0TdXillQt4y4Dulr2O_zm5Y=/0x0:1193x1500/1800x1800/filters:focal(597x750:598x751)/cdn.vox-cdn.com/uploads/chorus_asset/file/20039710/81REpi6__bL._SL1500_.jpg",
    },
    {
      id: 5,
      name: " Flag Day",
      directors: " Sean Penn ",
      writers: "Jez Butterworth",
      stars: "Mitchell Nguyen-McCormick",
      year: "2021",
      ratings: "4.6",
      genre: "Drama, Thriller",
      picture:
        "https://m.media-amazon.com/images/M/MV5BNzZlNDU3MzktZTZiNi00N2FmLWI0ZDktYmViYmEzMGQ1Nzc4XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_QL75_UX140_CR0,0,140,140_.jpg",
    },
    {
      id: 6,
      name: "Teen Wolf",
      directors: "Jeff Davis",
      writers: "Jeff Davis",
      stars: "Tyler Posey, Holland Roden",
      year: "2017",
      ratings: "4.6",
      genre: "Action, Drama, Fantasy",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Teen_Wolf.jpg/220px-Teen_Wolf.jpg",
    },
    {
      id: 7,
      name: " The Magnificent Seven",
      directors: "Antoine Fuqua ",
      writers: "Akira Kurosawa",
      stars: " Denzel Washington, Chris Pratt",
      year: "2016",
      ratings: "6.9",
      genre: "Action, Adventure, Western",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/e/ec/Magnificent_Seven_2016.jpg",
    },
    {
      id: 8,
      name: "Malcolm in the Middle ",
      directors: "Linwood Boomer",
      writers: "Linwood Boomer",
      stars: "Frankie Muniz, Bryan Cranston,",
      year: "2006",
      ratings: "8.0",
      genre: "Comedy,Family",
      picture:
        "https://m.media-amazon.com/images/M/MV5BNTc2MzM2N2YtZDdiOS00M2I2LWFjOGItMDM3OTA3YjUwNjAxXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_.jpg",
    },
  ]);
  return (
    <>
      <Container>
        <h1 style={h1}>Metro-Goldwyn-Mayer Production</h1>
        <Grid container>
          <Grid item xs={5}>
            <Box style={box}>
              <MetroProd bmovie={bmovie} />
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box style={box}>
              <Switch>
                <Route path="/details/Metro/:id">
                  <MetroProdDetails bmovie={bmovie} />
                </Route>
              </Switch>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MetroProdList;
