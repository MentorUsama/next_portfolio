import React from "react";
import Image from "next/image";
import * as classes from './ProjectCard.module.scss'

export default function ProjectCard(props) {
  return (
    <div className={`${classes.projectCard} ${
        props.mode == "light" ? classes.light : classes.dark
      }`}>
      {/* Banner */}
      <div className={classes.projectCard__banner}>
        <div className={classes.projectCard__banner_image}>
            <Image layout='fill' src={`/images/projects/${props.banner}`} alt={props.title} />
        </div>
        <div className={classes.projectCard__banner_title}>
            <h2>{props.title}</h2>
        </div>
      </div>
      {/* Description */}
      <div className={classes.projectCard__description}>
        <p>{props.description}</p>
      </div>
      {/* Tags */}
      <div className={classes.projectCard__tags}>
        {props.tags.map((tag) => (
          <div key={tag}>
            <p>{tag}</p>
          </div>
        ))}
      </div>
      {/* Links */}
      <div className={classes.projectCard__links}>

      </div>
    </div>
  );
}
