import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ErosInternational from "./ErosInternational";
import ErosInternationalDetails from "./ErosInternationalDetails";

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
      picture:
        "https://m.media-amazon.com/images/M/MV5BOTc3NzAxMjg4M15BMl5BanBnXkFtZTcwMDc2ODQwNw@@._V1_.jpg",
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
      picture: "http://www.movienewsletters.net/photos/137735R1.jpg",
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
      picture:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwEjcsZU7wSPGwOOS3IxeFPVa16K38IHDha_TIPNJFiddA_Hwt",
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
      picture:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWs652t_U303cXJnvVEag6QUtfXhzRr4DcJAGN5XaUuuml2v1R",
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
      picture:
        "https://m.media-amazon.com/images/M/MV5BMTgyNDQ4NDM2Nl5BMl5BanBnXkFtZTgwODI4NDk0MjI@._V1_.jpg",
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
      picture:
        "https://upload.wikimedia.org/wikipedia/en/5/58/Ra.Oneposter.jpg",
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
      picture:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT0QXr099x2m3unt1GFV-EKdYU7_tpkAvinDwZfz4GkYO2ljAK2",
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
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXuW7tPw_AVztitG6-uaHiJ3D1qpF7xflNfMJAdwItjqA5RF3",
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
                <Route path="/details/ErosInternational/:id">
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
