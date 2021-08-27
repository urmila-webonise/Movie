import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ColumbiaProd from "./ColumbiaProd";
import ColumbiaProdDetails from "./ColumbiaProdDetails";

const ColumbiaProdList = () => {
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
      name: "Spider-Man: Homecoming",
      directors: "Jon Watts",
      writers: "Jonathan Goldstein, John Francis Daley, Jon Watts",
      stars: "Tom Holland, Michael Keaton, Robert Downey Jr.",
      year: "2017",
      ratings: "7.4",
      genre: "comedy, adventure, action ",
      picture:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkBgGCS74dHRSe3i0fkEsdaC1jJPU4px6Pyv9-TOipm13gOprI",
    },
    {
      id: 2,
      name: "The Mitchells vs the Machines",
      directors: "Michael RiandaJeff Rowe",
      writers: "Michael Rianda, Jeff Rowe, Alex Hirsch",
      stars: "Abbi Jacobson, Danny McBride, Maya Rudolph",
      year: "2021",
      ratings: "7.7",
      genre: "adventure, kids & family, comedy",
      picture:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRIbZJvaXTGYD3iJUbv1u2Al13c1bJGv3wo-otVfHHdDfjC4f1U",
    },
    {
      id: 3,
      name: "Venom",
      directors: "Ruben Fleischer",
      writers: "Jeff Pinkner, Scott Rosenberg, Kelly Marcel",
      stars: "Tom Hardy, Michelle Williams",
      year: "2018",
      ratings: "6.7",
      genre: "Action",
      picture:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvGNXRmC76GfZrgM7P_oY0nZqg00bsjC7E5zu4dZBReXiHD_kt",
    },
    {
      id: 4,
      name: "Spider-Man: Far from Home",
      directors: "Jon Watts",
      writers: "Chris McKenna, Erik Sommers, Stan Lee",
      stars: "Tom Holland, Samuel L. Jackson, Jake Gyllenhaal",
      year: "2019",
      ratings: "7.5",
      genre: "comedy, adventure, action",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTStY893W6Ihm3px1v-iJu3s0qVaAcyXdiE2ICo9bShiQgpCSbx",
    },
    {
      id: 5,
      name: "Men in Black",
      directors: "Barry Sonnenfeld",
      writers: "Lowell Cunningham, Ed Solomon",
      stars: "Tommy Lee Jones, Will Smith, Linda Fiorentino",
      year: "1997",
      ratings: "7.3",
      genre: "comedy, sci-fi, adventure, action",
      picture:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-yrqG9KtBQFeQHujqJNGN6t3xckSdlXQC3WRvCb07fIeC5u__",
    },
    {
      id: 6,
      name: "Once Upon a Time... In Hollywood",
      directors: "Quentin Tarantino",
      writers: "Quentin Tarantino",
      stars: "Leonardo DiCaprio, Brad Pitt, Margot Robbie",
      year: "2019",
      ratings: "7.6",
      genre: "comedy, drama",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToswZe6sYekUbOf0TpjhYo64Z8P7x2x3zjT9XO2R_-2oXeX06Y",
    },
    {
      id: 7,
      name: "Jumanji: Welcome to the Jungle",
      directors: "Jake Kasdan",
      writers: "Chris McKenna,Erik Sommers,Scott Rosenberg",
      stars: "Dwayne Johnson,Karen Gillan,Kevin Hart",
      year: "2017",
      ratings: "6.9",
      genre: "comedy, adventure, action",
      picture: "https://contentserver.com.au/assets/637737_jumanji_v8_aa.jpg",
    },
    {
      id: 8,
      name: "Fatherhood",
      directors: "Paul Weitz",
      writers: "Dana Stevens, Paul Weitz, Matt Logelin",
      stars: "Kevin Hart, Alfre Woodard, Lil Rel Howery",
      year: "2021",
      ratings: "6.7",
      genre: "rama",
      picture:
        "https://m.media-amazon.com/images/M/MV5BMzU5YWYzZGMtNTE2My00NDE0LTgxNWYtZDYzYjI2YzM3OWJlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    },
  ]);
  return (
    <>
      <Container>
        <h1 style={h1}>Columbia Production</h1>
        <Grid container>
          <Grid item xs={5}>
            <Box style={box}>
              <ColumbiaProd bmovie={bmovie} />
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box style={box}>
              <Switch>
                <Route path="/details/Columbia/:id">
                  <ColumbiaProdDetails bmovie={bmovie} />
                </Route>
              </Switch>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ColumbiaProdList;
