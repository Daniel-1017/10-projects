import React, { Fragment } from "react";
import Gallery from "./components/Gallery/Gallery";
import Navbar from "./components/Navbar/Navbar";
import PopularMeals from "./components/PopularMeals/PopularMeals";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <PopularMeals />
      <Gallery />
    </Fragment>
  );
};

export default App;
