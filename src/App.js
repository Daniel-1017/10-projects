import React, { Fragment } from "react";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Navbar from "./components/Navbar/Navbar";
import PopularMeals from "./components/PopularMeals/PopularMeals";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <PopularMeals />
      <Gallery />
      <Footer />
    </Fragment>
  );
};

export default App;
