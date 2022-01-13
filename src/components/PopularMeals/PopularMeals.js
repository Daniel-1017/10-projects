import React, { Fragment } from "react";
import classes from "./PopularMeals.module.css";
import Fish from "../../images/card-img-1.png";
import Cake from "../../images/card-img-2.png";
import Lobster from "../../images/card-img-3.png";

const PopularMeals = () => {
  return (
    <Fragment>
      <section className={classes["section-2"]}>
        <h1 className="section-heading">popular meals</h1>
        <div className={classes["cards-container"]}>
          <div className={classes.card}>
            <img src={Fish} className={classes["card-img"]} />
            <h3 className={classes["card-name"]}>Fish</h3>
            <button className={classes["card-btn"]}>Order now</button>
          </div>
          <div className={classes.card}>
            <img src={Cake} className={classes["card-img"]} />
            <h3 className={classes["card-name"]}>Cake</h3>
            <button className={classes["card-btn"]}>Order now</button>
          </div>
          <div className={classes.card}>
            <img src={Lobster} className={classes["card-img"]} />
            <h3 className={classes["card-name"]}>Lobster</h3>
            <button className={classes["card-btn"]}>Order now</button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PopularMeals;
