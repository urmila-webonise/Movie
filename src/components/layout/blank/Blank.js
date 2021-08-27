import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../ui/header/Header";
import PageNotFound from "../../ui/page-not-found/PageNotFound";
import MovieDemo from "../../features/admin/movies/MovieDemo";
import BrandDemo from "../../features/admin/brands/BrandDemo";
import Details from "../detail/Details";

const Blank = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <MovieDemo />
        </Route>
        <Route path="/brands">
          <BrandDemo />
        </Route>

        <Route path="/details">
          <Details />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
};

export default Blank;
