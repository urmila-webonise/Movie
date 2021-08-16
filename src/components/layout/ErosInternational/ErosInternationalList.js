import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ErosInternational from "../ErosInternational/ErosInternational";
import ErosInternationalDetails from "../ErosInternational/ErosInternationalDetails";

const ErosInternationalList = () => {
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
      name: "Rockstar",
      directors: "Imtiaz Ali",
      writers: "Imtiaz AliMuazzam Beg",
      stars: "Ranbir Kapoor, Nargis Fakhri",
      year: "2011",
      ratings: "7.7",
      genre: "romance, drama",
      picture: "./eros/rockstar.jpeg",
    },
    {
      id: 2,
      name: "English Vinglish",
      directors: "Gauri Shinde",
      writers: "Gauri Shinde",
      stars: "Sridevi, Adil Hussain",
      year: "2012",
      ratings: "7.8",
      genre: "Comedy",
      picture: "./eros/englishv.jpg",
    },
    {
      id: 3,
      name: "Kaadan",
      directors: "Prabu Solomon",
      writers: "Ravi Bhushan Kumar, Prabu Solomon",
      stars: "Raghu Babu, Rana Daggubati, Shriya Pilgaonkar",
      year: "2021",
      ratings: "9.0",
      genre: "Action",
      picture: "./eros/kadaan.jpeg",
    },
    {
      id: 4,
      name: "Cocktail",
      directors: "Homi Adajania",
      writers: "Imtiaz Ali,Sajid Ali",
      stars: "Saif Ali Khan, Deepika Padukone, Diana Penty",
      year: "2012",
      ratings: "6.3",
      genre: "Drama",
      picture: "./eros/cocktail.jpeg",
    },
    {
      id: 5,
      name: "Munna Michael",
      directors: "Sabir Khan",
      writers: "Vimi Datta",
      stars: "Tiger Shroff, Nidhhi Agerwal",
      year: "2017",
      ratings: "3.3",
      genre: "Action",
      picture: "./eros/munnami.jpeg",
    },
    {
      id: 6,
      name: "Ra.One",
      directors: "Anubhav Sinha",
      writers: "David Benullo, Kanika Dhillon",
      stars: "Shah Rukh Khan, Arjun Rampal, Kareena Kapoor",
      year: "2011",
      ratings: "4.7",
      genre: "Action",
      picture: "./eros/raone.jpeg",
    },
    {
      id: 7,
      name: "Action Jackson",
      directors: "Prabhu Deva",
      writers: "A.C. Mughil, Shiraz Ahmed, Prabhu Deva",
      stars: "Ajay Devgn, PrabhasShahid Kapoor,",
      year: "2014",
      ratings: "3.3",
      genre: "Action",
      picture: "./eros/actionjaction.jpeg",
    },
    {
      id: 8,
      name: "Veer",
      directors: "Anil Sharma",
      writers: "Shailesh Verma, Shaktimaan Talwar, Salman Khan",
      stars: "Salman Khan, Mithun Chakraborty",
      year: "2010",
      ratings: "4.5",
      genre: "Drama",
      picture: "./eros/veer.jpeg",
    },
  ]);
  return (
    <>
      <Container>
        <h1 style={h1}>Eros International</h1>
        <Grid container>
          <Grid item xs={5}>
            <Box style={box}>
              <ErosInternational bmovie={bmovie} />
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box style={box}>
              <Switch>
                <Route path="/:id">
                  <ErosInternationalDetails bmovie={bmovie} />
                </Route>
              </Switch>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ErosInternationalList;
