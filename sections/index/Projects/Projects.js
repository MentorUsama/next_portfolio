import React from "react";
import * as classes from "./Projects.module.scss";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import {images} from '../../../constants/index'

export default function Projects(props) {
  return (
    <div
      className={`${classes.projects} ${
        props.mode == "light" ? classes.light : classes.dark
      }`}
    >
      <h1>Projects</h1>
      <div className={classes.projects__container}>
        <div><ProjectCard mode={props.mode} title="Slack App" description="A chatting app with functionality of both [ublic and personal chat with realtime database" banner={images.ReactNativeChatting} tags={["HTML","CSS","Javascript","React","Firebase"]} /></div>
        <div><ProjectCard mode={props.mode} title="Slack App" description="A chatting app with functionality of both [ublic and personal chat with realtime database" banner={images.ReactNativeChatting} tags={["HTML","CSS","Javascript","React","Firebase"]} /></div>
        <div><ProjectCard mode={props.mode} title="Slack App" description="A chatting app with functionality of both [ublic and personal chat with realtime database" banner={images.ReactNativeChatting} tags={["HTML","CSS","Javascript","React","Firebase"]} /></div>
        <div><ProjectCard mode={props.mode} title="Slack App" description="A chatting app with functionality of both [ublic and personal chat with realtime database" banner={images.ReactNativeChatting} tags={["HTML","CSS","Javascript","React","Firebase"]} /></div>
        <div><ProjectCard mode={props.mode} title="Slack App" description="A chatting app with functionality of both [ublic and personal chat with realtime database" banner={images.ReactNativeChatting} tags={["HTML","CSS","Javascript","React","Firebase"]} /></div>

      </div>
    </div>
  );
}
