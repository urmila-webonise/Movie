import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../ui/header/Header";
import Contact from "../../frontend/contact/Contact";
import About from "../../frontend/about/About";
import Home from "../../frontend/home/Home";
const Blank = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
};

export default Blank;
