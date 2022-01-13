import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import PopularMeals from "./components/PopularMeals/PopularMeals";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <PopularMeals />
    </Fragment>
  );
};

export default App;
