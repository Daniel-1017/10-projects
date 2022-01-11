import React, { Fragment, useState } from "react";
import classes from "./Navbar.module.css";
import { FaHome } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { FaBlenderPhone } from "react-icons/fa";

const Navbar = () => {
  const [visibleNavbar, setVisibleNavbar] = useState(false);

  const toggleNavbar = () => {
    setVisibleNavbar((prevState) => !prevState);
  };

  return (
    <Fragment>
      <nav
        className={`${classes.navbar} ${classes.target} ${
          visibleNavbar && classes.change
        }`}
      >
        <a href="#" className={classes["navbar-link"]}>
          <FaHome className={classes["navbar-icon"]} />
          <span>Home</span>
        </a>
        <a href="#" className={classes["navbar-link"]}>
          <FaUtensils className={classes["navbar-icon"]} />
          <span>Meals</span>
        </a>
        <a href="#" className={classes["navbar-link"]}>
          <FaHamburger className={classes["navbar-icon"]} />
          <span>Burger</span>
        </a>
        <a href="#" className={classes["navbar-link"]}>
          <FaPizzaSlice className={classes["navbar-icon"]} />
          <span>Pizza</span>
        </a>
        <a href="#" className={classes["navbar-link"]}>
          <FaBlenderPhone className={classes["navbar-icon"]} />
          <span>Contact</span>
        </a>
      </nav>
      <div
        className={`${classes.menu} ${classes.target} ${
          visibleNavbar && classes.change
        }`}
        onClick={toggleNavbar}
      ></div>
    </Fragment>
  );
};

export default Navbar;
