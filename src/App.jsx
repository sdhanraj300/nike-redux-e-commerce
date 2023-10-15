import React from "react";
import { Hero } from "./components";
import { heroapi } from "./data/data";
const App = () => {
  return (
    <div className="">
      <Hero heroapi={heroapi}   />
    </div>
  );
};

export default App;
