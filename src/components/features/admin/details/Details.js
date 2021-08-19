import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ColumbiaProdList from "./Columbia/ColumbiaProdList";
import DreamworkworkProdList from "./Dreamwork/DreamworkProdList";
import ErosInternationalList from "./ErosInternational/ErosInternationalList";
import BhansaliProdList from "./Bhansali/BhansaliProdList";

const routes = [
  {
    path: "/details/bhansali",
    exact: true,
    main: () => <BhansaliProdList />,
  },
  {
    path: "/details/columbia",
    main: () => <ColumbiaProdList />,
  },
  {
    path: "/details/dream",
    main: () => <DreamworkworkProdList />,
  },
  {
    path: "/details/eros",
    main: () => <ErosInternationalList />,
  },
];

const Details = () => {
  const link = {
    color: "#fff",
    textDecoration: "none",
  };
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/details/bhansali" style={link}>
                BhansaliProdList
              </Link>
            </li>
            <li>
              <Link to="/details/columbia" style={link}>
                ColumbiaProdList
              </Link>
            </li>
            <li>
              <Link to="/details/dream" style={link}>
                DreamworkworkProdList
              </Link>
            </li>
            <li>
              <Link to="/details/eros" style={link}>
                ErosInternationalList
              </Link>
            </li>
          </ul>
        </div>

        <div style={{ flex: 1, padding: "10px", color: "#fff" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default Details;
