import React from "react";
import { Hero, Sales } from "./components";
import { heroapi, popularsales, toprateslaes } from "./data/data";

const App = () => {
  return (
    <div className="flex flex-col gap-16 relative">
      <Hero heroapi={heroapi} />
      <Sales endpoint={popularsales} />
      <Sales endpoint={toprateslaes} />
    </div>
  );
};

export default App;
