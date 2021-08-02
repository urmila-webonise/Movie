import { Fullscreen } from "@material-ui/icons";
import { Route, Switch } from "react-router-dom";
import Blank from "./components/layout/blank/Blank";
import Full from "./components/layout/full/Full";

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Blank />
        </Route>
        <Route path="/full">
          <Full />
        </Route>
      </Switch>
    </>
  );
}

export default App;
