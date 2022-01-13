import React, { Fragment } from "react";
import classes from "./Footer.module.css";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <Fragment>
      <section className={classes["section-4"]}>
        <div className={classes["section-4-text"]}>
          <h2 className={classes["section-4-heading"]}>Sign Me Up</h2>
          <p className={classes["section-4-paragraph"]}>
            BE THE FIRST TO KNOW ABOUT NEW PRODUCTS
          </p>
        </div>
        <form className={classes["signup-form"]}>
          <input
            type="email"
            className={classes["signup-form-input"]}
            placeholder="Enter Your Email"
          />
          <button type="submit" className={classes["signup-form-btn"]}>
            <FaArrowRight />
          </button>
        </form>
        <p className={classes.copyright}>
          CodeAndCreate &copy; All rights reserved
        </p>
      </section>
    </Fragment>
  );
};

export default Footer;
