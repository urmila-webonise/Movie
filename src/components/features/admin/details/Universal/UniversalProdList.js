import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import UniversalProd from "./UniversalProd";
import UniversalProdDetails from "./UniversalProdDetails";

const UniversalProdList = () => {
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
      name: "The Mummy",
      directors: "Stephen Sommers ",
      writers: "Stephen Sommers",
      stars: " Arnold Schwarzenegger",
      year: "1999",
      ratings: "7.0",
      genre: "Action, Adventure, Fantasy",
      picture: "https://upload.wikimedia.org/wikipedia/en/6/68/The_mummy.jpg",
    },
    {
      id: 2,
      name: " Jurassic World ",
      directors: " Colin Trevorrow ",
      writers: "Rick Jaffa",
      stars: " Chris Pratt, Bryce Dallas Howard",
      year: "2015",
      ratings: "7.0",
      genre: "Action, Adventure, Sci-Fi",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/c/c6/Jurassic_World_Fallen_Kingdom.png",
    },
    {
      id: 3,
      name: " Split ",
      directors: "M. Night Shyamalan",
      writers: "M. Night Shyamalan",
      stars: "James McAvoy, Anya Taylor-Joy",
      year: "2016",
      ratings: "7.3",
      genre: "Horror, Thriller",
      picture:
        "https://m.media-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_.jpg",
    },
    {
      id: 4,
      name: "Gosford Park",
      directors: "Robert Altman",
      writers: "Julian Fellowes",
      stars: "Maggie Smith, Ryan Phillippe",
      year: "2001",
      ratings: "7.2",
      genre: "Comedy, Drama, Mystery",
      picture:
        "https://m.media-amazon.com/images/M/MV5BYzM4YzlhZGMtYTI2Yi00OTY4LWE0MzctNDFlYTQ3YmFlOTBjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
    {
      id: 5,
      name: "Fast & Furious",
      directors: "Justin Lin",
      writers: "Chris Morgan",
      stars: "Vin Diesel, Paul Walker",
      year: "2009",
      ratings: "6.6",
      genre: "Action, Thriller",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/8/8f/Fast_and_Furious_Poster.jpg",
    },
    {
      id: 6,
      name: "American Gangster",
      directors: " Ridley Scott",
      writers: "Steven Zaillian",
      stars: " Denzel Washington, Russell Crowe",
      year: "2007",
      ratings: "7.8",
      genre: "Biography, Crime, Drama",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/9/9f/American_Gangster_poster.jpg",
    },
    {
      id: 7,
      name: " A Beautiful Mind",
      directors: "Ron Howard",
      writers: "Akiva Goldsman",
      stars: " Russell Crowe, Ed Harris",
      year: "2001",
      ratings: "8.2",
      genre: "Biography, Drama",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/b/b8/A_Beautiful_Mind_Poster.jpg",
    },
    {
      id: 8,
      name: "L.A. Confidential",
      directors: " Curtis Hanson",
      writers: "James Ellroy",
      stars: "Kevin Spacey, Russell Crowe,",
      year: "1997",
      ratings: "8.2",
      genre: " Crime, Drama, Mystery",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/La_confidential.jpg/220px-La_confidential.jpg",
    },
  ]);
  return (
    <>
      <Container>
        <h1 style={h1}>Universal Production</h1>
        <Grid container>
          <Grid item xs={5}>
            <Box style={box}>
              <UniversalProd bmovie={bmovie} />
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box style={box}>
              <Switch>
                <Route path="/details/Universal/:id">
                  <UniversalProdDetails bmovie={bmovie} />
                </Route>
              </Switch>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UniversalProdList;
