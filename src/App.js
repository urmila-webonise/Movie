import React from "react";
import Blank from "./components/layout/blank/Blank";

const App = () => {
  const theme = {
    backgroundColor: "#000",
  };
  return (
    <div style={theme}>
      <Blank />
    </div>
  );
};

export default App;
