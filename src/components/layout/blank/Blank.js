import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../ui/header/Header";
import PageNotFound from "../../ui/page-not-found/PageNotFound";
import MovieDemo from "../../features/admin/movies/MovieDemo";
import BrandDemo from "../../features/admin/brands/BrandDemo";
import BhansaliProdList from "../../layout/Bhansali/BhansaliProdList";
import ColumbiaProdList from "../Columbia/ColumbiaProdList";
import DreamworkworkProdList from "../Dreamwork/DreamworkProdList";
import ErosInternationalList from "../ErosInternational/ErosInternationalList";
import MovieForm from "../addmovie/MovieForm";
import Full from "../../features/admin/full/Full";
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

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>

      {/* <BhansaliProdList /> */}
      {/* <ColumbiaProdList /> */}
      {/* <DreamworkworkProdList /> */}
      {/* <ErosInternationalList/> */}
    </>
  );
};

export default Blank;
