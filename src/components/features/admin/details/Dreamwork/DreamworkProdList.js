import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import DreamworkProd from "./DreamworkProd";
import DreamworkProdDetails from "./DreamworkProdDetails";

const DreamworkworkProdList = () => {
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
      name: "The BFG",
      directors: "Steven Spielberg",
      writers: "Melissa Mathison, Roald Dahl",
      stars: "Mark Rylance, Ruby Barnhill",
      year: "2016",
      ratings: "6.4",
      genre: "kids & family, adventure",
      picture:
        "https://www.whatutalkingboutwillis.com/wp-content/uploads/2016/01/the-bfg-poster.jpg",
    },
    {
      id: 2,
      name: "The Help",
      directors: "Tate Taylor",
      writers: "Tate Taylor, Kathryn Stockett",
      stars: "Emma Stone, Viola Davis",
      year: "2011",
      ratings: "8.0",
      genre: "drama",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/d/d3/The_Help_%282011_film%29.jpg",
    },
    {
      id: 3,
      name: "Real Steel",
      directors: "Shawn Levy",
      writers: "John Gatins, John Gatins",
      stars: "Hugh Jackman, Evangeline Lilly, Dakota Goyo",
      year: "2011",
      ratings: "7.0",
      genre: "sci-fi, action",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Real_Steel_Poster.jpg/220px-Real_Steel_Poster.jpg",
    },
    {
      id: 4,
      name: "War Horse",
      directors: "Steven Spielberg",
      writers: "Lee Hall, Richard Curtis, Michael Morpurgo",
      stars: "Jeremy Irvine, Emily Watson, David Thewlis",
      year: "2011",
      ratings: "7.2",
      genre: "Action,Adventure",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/d/da/War-horse-poster.jpg",
    },
    {
      id: 5,
      name: "Shutter Island",
      directors: "Martin Scorsese",
      writers: "Laeta Kalogridis, Dennis Lehane",
      stars: "Leonardo DiCaprio, Emily Mortimer",
      year: "2010",
      ratings: "8.2",
      genre: "Gothic, Psychological Horror",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg",
    },
    {
      id: 6,
      name: "Shrek",
      directors: "Andrew AdamsonVicky Jenson",
      writers: "William Steig, Ted ElliottTerry Rossio",
      stars: "Mike Myers, Eddie Murphy",
      year: "2001",
      ratings: "7.9",
      genre: " Adventure, Comedy ",
      picture:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_OkJKQ6ZpDV_xhC0L9zyHEcKMlV9x3Q30LF6MOE0nV1U6r09p",
    },
    {
      id: 7,
      name: "1917",
      directors: "Sam Mendes",
      writers: "Sam Mendes, Krysty Wilson-Cairns",
      stars: "Dean-Charles Chapman, George MacKay",
      year: "2019",
      ratings: "8.3",
      genre: "drama, history",
      picture: "https://i.ytimg.com/vi/VzvdoLeXClg/movieposter_en.jpg",
    },
    {
      id: 8,
      name: "Green Book",
      directors: "Peter Farrelly",
      writers: "Nick Vallelonga, Brian Hayes Currie, Peter Farrelly",
      stars: "Viggo Mortensen, Mahershala Ali",
      year: "2018",
      ratings: "8.2",
      genre: "comedy, drama",
      picture:
        "https://movies.universalpictures.com/media/gbk-tsr1sheet-rgb-3sm-5b7308033d1a5-1.jpg",
    },
  ]);
  return (
    <>
      <Container>
        <h1 style={h1}>Dream Work Production</h1>
        <Grid container>
          <Grid item xs={5}>
            <Box style={box}>
              <DreamworkProd bmovie={bmovie} />
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box style={box}>
              <Switch>
                <Route path="/details/Dreamwork/:id">
                  <DreamworkProdDetails bmovie={bmovie} />
                </Route>
              </Switch>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DreamworkworkProdList;
