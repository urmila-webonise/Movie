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
      picture: "./columbia/spiderman.jpeg",
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
      picture: "./columbia/mm.jpeg",
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
      picture: "./columbia/Venom.png",
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
      picture: "./columbia/spiderman1.jpeg",
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
      picture: "./columbia/meninblack.jpeg",
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
      picture: "./columbia/OUTB.jpeg",
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
      picture: "./columbia/jumanji.jpg",
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
      picture: "./columbia/fatherhood1.jpeg",
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
                <Route path="/:id">
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
