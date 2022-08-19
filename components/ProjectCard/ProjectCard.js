import React from "react";
import Image from "next/image";
import * as classes from "./ProjectCard.module.scss";
import { BsGithub, BsGlobe } from "react-icons/bs";

export default function ProjectCard(props) {
  return (
    <div
      className={`${classes.projectCard} ${
        props.mode == "light" ? classes.light : classes.dark
      }`}
    >
      <div
        className={classes.main_content_container}
      >
        {/* Banner */}
        <div className={classes.projectCard__banner}>
          <div className={classes.projectCard__banner_image}>
            <Image
              layout="fill"
              src={`/images/projects/${props.banner}`}
              alt={props.title}
            />
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
              <p>{props.getSkillName(props.skills,tag)}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Links */}
      <div className={classes.projectCard__links}>
        <a target="__blank" href={props.github} disabled={props.github==""?true:false} className={props.github==""?classes.disabled:null}>
          <BsGithub />
        </a>
        <a target="__blank" href={props.host} disabled={props.host==""?true:false} className={props.host==""?classes.disabled:null}>
          <BsGlobe />
        </a>
      </div>
    </div>
  );
}
