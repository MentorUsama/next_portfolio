import React from "react";
import Image from "next/image";
import * as classes from "./SkillsCard.module.scss";
export default function SkillsCard(props) {
  return (
    <div
      className={`${classes.card} ${
        props.mode == "light" ? classes.light : classes.dark
      }`}
    >
      <div className={classes.image}>
        <Image
          src={`/images/skills/${props.icon}`}
          width={"200px"}
          height={"200px"}
          alt="Skills"
        />
      </div>
      <div className={classes.title}>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}
