import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TristarProd from "./TristarProd";
import TristarProdDetails from "./TristarProdDetails";

const TristarProdList = () => {
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
      name: "Field of Dreams",
      directors: "Phil Alden Robinson",
      writers: "Phil Alden Robinson",
      stars: "Kevin Costner, James Earl Jones",
      year: "1989",
      ratings: "7.5",
      genre: "Drama, Family, Fantasy",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/6/6b/Field_of_Dreams_poster.jpg",
    },
    {
      id: 2,
      name: "The Natural",
      directors: " Barry Levinson ",
      writers: "Barry Levinson",
      stars: "Robert Redford, Robert Duvall,",
      year: "1984",
      ratings: "7.5",
      genre: "Drama, Sport",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Natural_%281984_film%29_poster.jpg",
    },
    {
      id: 3,
      name: "Baby Driver",
      directors: " Edgar Wright ",
      writers: "Edgar Wright",
      stars: " Ansel Elgort, Jon Bernthal",
      year: "2017",
      ratings: "7.6",
      genre: "Action, Crime, Drama",
      picture:
        "https://anfieldindex.com/wp-content/uploads/babydriver-Review.png",
    },
    {
      id: 4,
      name: " Terminator 2: Judgment Day",
      directors: "James Cameron ",
      writers: "James Cameron",
      stars: " Arnold Schwarzenegger",
      year: "1991",
      ratings: "8.5",
      genre: "Action, Sci-Fi",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-SqlJzztvaQC2qE0PkIzbQ_a4nvIElG1HQ&usqp=CAU",
    },
    {
      id: 5,
      name: "Hook",
      directors: "Steven Spielberg ",
      writers: "J.M.Barrie,James V. Hart",
      stars: "Dustin Hoffman, Robin Williams",
      year: "1991",
      ratings: "6.8",
      genre: "Adventure, Comedy, Family",
      picture:
        "https://m.media-amazon.com/images/M/MV5BNmJjNTQzMjctMmE2NS00ZmYxLWE1NjYtYmRmNjNiMzljOTc3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
    },
    {
      id: 6,
      name: "Basic Instinct",
      directors: "Paul Verhoeven |",
      writers: "Joe Eszterhas",
      stars: "Michael Douglas, Sharon Stone",
      year: "1992",
      ratings: "7.0",
      genre: "Drama, Mystery, Thriller",
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/91UKEbUO8kL._RI_.jpg",
    },
    {
      id: 7,
      name: " Toy Soldiers ",
      directors: "Daniel Petrie Jr.",
      writers: "William P. Kennedy",
      stars: " Wil Wheaton, Keith Coogan",
      year: "1991",
      ratings: "6.6",
      genre: "Action, Drama, Thriller",
      picture:
        "https://i.pinimg.com/originals/e4/11/6f/e4116f5f9db5316f5c8f326966cb54b0.jpg",
    },
    {
      id: 8,
      name: "Total Recall",
      directors: "Paul Verhoeven",
      writers: "Philip K. Dick",
      stars: " Arnold Schwarzenegger, Sharon Stone",
      year: "1990",
      ratings: "7.5",
      genre: "Action, Sci-Fi, Thriller",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/f/f9/Total_recall.jpg",
    },
  ]);
  return (
    <>
      <Container>
        <h1 style={h1}>Tri Star Pictures Production</h1>
        <Grid container>
          <Grid item xs={5}>
            <Box style={box}>
              <TristarProd bmovie={bmovie} />
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box style={box}>
              <Switch>
                <Route path="/details/Tristar/:id">
                  <TristarProdDetails bmovie={bmovie} />
                </Route>
              </Switch>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TristarProdList;
