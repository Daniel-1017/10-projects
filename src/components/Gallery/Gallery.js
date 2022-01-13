import React, { Fragment } from "react";
import classes from "./Gallery.module.css";
import Pancakes from "../../images/gallery-img-1.jpg";
import Cupcakes from "../../images/gallery-img-2.jpg";
import Hummus from "../../images/gallery-img-3.jpg";
import Hamburger from "../../images/gallery-img-4.jpg";
import Salmon from "../../images/gallery-img-5.jpg";
import Vegetables from "../../images/gallery-img-6.jpg";

const Gallery = () => {
  return (
    <Fragment>
      <section className={classes["section-3"]}>
        <h1 className="section-heading">Gallery</h1>
        <div className={classes.gallery}>
          <a href="#" className={classes["gallery-link"]} title="Order Now">
            <img src={Pancakes} className={classes["food-img"]} />
            <h3 className={classes["food-name"]}>Pancakes</h3>
            <p className={classes["food-description"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              commodi possimus iure hic excepturi. Corporis!
            </p>
          </a>
          <a href="#" className={classes["gallery-link"]} title="Order Now">
            <img src={Cupcakes} className={classes["food-img"]} />
            <h3 className={classes["food-name"]}>Cupcakes</h3>
            <p className={classes["food-description"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              commodi possimus iure hic excepturi. Corporis!
            </p>
          </a>
          <a href="#" className={classes["gallery-link"]} title="Order Now">
            <img src={Hummus} className={classes["food-img"]} />
            <h3 className={classes["food-name"]}>Hummus</h3>
            <p className={classes["food-description"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              commodi possimus iure hic excepturi. Corporis!
            </p>
          </a>
          <a href="#" className={classes["gallery-link"]} title="Order Now">
            <img src={Hamburger} className={classes["food-img"]} />
            <h3 className={classes["food-name"]}>Hamburger</h3>
            <p className={classes["food-description"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              commodi possimus iure hic excepturi. Corporis!
            </p>
          </a>
          <a href="#" className={classes["gallery-link"]} title="Order Now">
            <img src={Salmon} className={classes["food-img"]} />
            <h3 className={classes["food-name"]}>Salmon</h3>
            <p className={classes["food-description"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              commodi possimus iure hic excepturi. Corporis!
            </p>
          </a>
          <a href="#" className={classes["gallery-link"]} title="Order Now">
            <img src={Vegetables} className={classes["food-img"]} />
            <h3 className={classes["food-name"]}>Vegetables</h3>
            <p class={classes["food-description"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              commodi possimus iure hic excepturi. Corporis!
            </p>
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default Gallery;
