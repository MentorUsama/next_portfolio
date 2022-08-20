import React from "react";
import Image from "next/image";
import * as classes from "./ContactCard.module.scss";
export default function ContactCard(props) {
  return (
    <div
      className={`${classes.card} ${
        props.mode == "light" ? classes.light : classes.dark
      }`}
    >
      <div className={classes.image}>
        <Image
          src={props.icon}
          width={"200px"}
          height={"200px"}
          alt="Contact"
        />
      </div>
      <div className={classes.title}>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}
