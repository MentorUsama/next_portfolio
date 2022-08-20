import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import * as classes from "./Rating.module.scss";
export default function Rating(props) {
  return (
    <div
      className={`${classes.rating} ${
        props.mode == "light" ? classes.light : classes.dark
      }`}
    >
      <div>
        {[1, 2, 3, 4, 5].map((rating) => {
          if (rating <= Math.floor(props.rating)) {
            return (
              <div  className={classes.fill}>
                <AiFillStar />
              </div>
            );
          } else {
            return (
              <div className={classes.outline}>
                <AiOutlineStar />
              </div>
            );
          }
        })}
      </div>
      <p>{props.rating}</p>
    </div>
  );
}
