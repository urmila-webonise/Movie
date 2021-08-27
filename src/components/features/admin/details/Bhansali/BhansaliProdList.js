import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import BhansaliProd from "./BhansaliProd";
import BhansaliProdDetails from "./BhansaliProdDetails";

const BhansaliProdList = () => {
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
      name: "Padmaavat",
      directors: "Sanjay Leela Bhansali",
      writers: "Prakash Kapadia",
      stars: "Deepika Padukone, Ranveer Singh",
      year: " 2018",
      ratings: "7.0",
      genre: "Drama, History, Romance",
      picture: "https://contentserver.com.au/assets/603892_v7_padvaati.jpg",
    },
    {
      id: 2,
      name: "Bajirao Mastani",
      directors: "Sanjay Leela Bhansali",
      writers: "Nagnath S. Inamdar, Prakash Kapadia",
      stars: "Deepika Padukone, Ranveer Singh",
      year: "2015",
      ratings: "7.2",
      genre: "Drama, History, Romance",
      picture:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlrVbVegkEEzd-0TUa-6tUxLAu6SyJcd7CgG3Dqcdm3TC2J6N_",
    },
    {
      id: 3,
      name: "Goliyon Ki Raasleela Ram-Leela ",
      directors: "Sanjay Leela Bhansali",
      writers: "Sanjay Leela Bhansali",
      stars: "Deepika Padukone, Ranveer Singh",
      year: "2013",
      ratings: "7.2",
      genre: " Romance, Drama, Musical, Bollywood",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQ-gRDZRZQ1ItG0BJtRRu9ko0zr6j4itoAp8iHWQ8aJ3fNWh2",
    },
    {
      id: 4,
      name: "Gangubai Kathiawadi",
      directors: "Sanjay Leela Bhansali",
      writers: "Sanjay Leela Bhansali",
      stars: "Alia Bhatt",
      year: "2021",
      ratings: "7.2",
      genre: "Drama, History",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcTu30gYBV3W-uileMjbAZoUTuiyEqbuD2n1cgLjwEisZT5S2",
    },
    {
      id: 5,
      name: "Devdas",
      directors: "Sanjay Leela Bhansali",
      writers: "Saratchandra Chatterjee, Sanjay Leela Bhansali",
      stars: "Salman Khan, Aishwarya Rai Bachchan",
      year: "1999",
      ratings: "7.5",
      genre: "Drama,Romance",
      picture: "http://www.gstatic.com/tv/thumb/movies/33367/33367_aa.jpg",
    },
    {
      id: 6,
      name: "Black",
      directors: "Sanjay Leela Bhansali",
      writers: "Sanjay Leela Bhansali, Bhavani Iyer",
      stars: "Rani Mukerji, Amitabh Bachchan",
      year: "2005",
      ratings: "8.2",
      genre: "Drama",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxPP593hbbqvg3yov7CAm6ofnjFzGa3BxCFVa_3ob1nAptLgc",
    },
    {
      id: 7,
      name: "Malaal",
      directors: "Mangesh Hadawale",
      writers: "Sanjay Leela Bhansali, Mangesh Hadawale",
      stars: "Meezaan, Sharmin Sehgal",
      year: "2019",
      ratings: "6.7",
      genre: "Drama,Romance",
      picture:
        "https://3.bp.blogspot.com/-xOWAXdjacGY/XOPHgZ_lVKI/AAAAAAAAYy4/hKLXT6ye51oK7C-nwCoc2yLzeKeLsKfFgCLcBGAs/s1600/malaal-movie-poster-star-cast-release-date-mt-wiki.jpg",
    },
    {
      id: 8,
      name: "Rowdy Rathore",
      directors: "Prabhu Deva",
      writers: "Shiraz Ahmed",
      stars: "Akshay Kumar, Sonakshi Sinha",
      year: "2012",
      ratings: "5.7",
      genre: "Drama,Romance",
      picture:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ5izUDsf_beJ1dGROOrtE4DgJjfEeo2VpfrZQ-Za2kvtr9qPVM",
    },
  ]);
  return (
    <>
      <Container>
        <h1 style={h1}>Bhansali Production</h1>
        <Grid container>
          <Grid item xs={5}>
            <Box style={box}>
              <BhansaliProd bmovie={bmovie} />
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box style={box}>
              <Switch>
                <Route path="/details/Bhansali/:id">
                  <BhansaliProdDetails bmovie={bmovie} />
                </Route>
              </Switch>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BhansaliProdList;
