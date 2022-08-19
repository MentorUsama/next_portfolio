import React, { useState } from "react";
import * as classes from "./Projects.module.scss";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import { images } from "../../../constants/index";
import Multiselect from "multiselect-react-dropdown";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Projects(props) {
  return (
    <div
      className={`${classes.projects} ${
        props.mode == "light" ? classes.light : classes.dark
      }`}
    >
      <h1>Projects</h1>
      <div className={classes.selectection__container}>
        <div
          className={`single project-multi-selector ${
            props.mode == "light" ? "light" : "dark"
          }`}
        >
          <Multiselect
            options={props.services} // Options to display in the dropdown
            selectedValues={props.selctedService} // Preselected value to persist in dropdown
            onSelect={props.onServiceSelect} // Function will trigger on select event
            onRemove={props.onServiceRemoved}
            displayValue="title" // Property name to display in the dropdown options
            placeholder="Select Services"
            singleSelect
            style={{
              multiselectContainer: { minHeight: "42px", height: "100%" },
              searchBox: { height: "100%" },
            }}
          />
        </div>
        <div
          className={`project-multi-selector multiple ${
            props.mode == "light" ? "light" : "dark"
          }`}
        >
          <Multiselect
            options={props.skills} // Options to display in the dropdown
            selectedValues={props.selectedSkill} // Preselected value to persist in dropdown
            onSelect={props.onSelect} // Function will trigger on select event
            onRemove={props.onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            placeholder="Select Skills"
            style={{
              multiselectContainer: { minHeight: "42px" },
              searchBox: { height: "100%", minHeight: "42px" },
            }}
            customCloseIcon={
              <div
                style={{
                  marginLeft: "5px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <AiOutlineCloseCircle />
              </div>
            }
          />
        </div>
      </div>
      <div className={classes.projects__container}>
        <div>
          <ProjectCard
            mode={props.mode}
            title="Slack App"
            description="A chatting app with functionality of both [ublic and personal chat with realtime database"
            banner={images.ReactNativeChatting}
            tags={["HTML", "CSS", "Javascript", "React", "Firebase"]}
          />
        </div>
        <div>
          <ProjectCard
            mode={props.mode}
            title="Slack App"
            description="A chatting app with functionality of both [ublic and personal chat with realtime database"
            banner={images.ReactNativeChatting}
            tags={["HTML", "CSS", "Javascript", "React", "Firebase"]}
          />
        </div>
        <div>
          <ProjectCard
            mode={props.mode}
            title="Slack App"
            description="A chatting app with functionality of both [ublic and personal chat with realtime database"
            banner={images.ReactNativeChatting}
            tags={["HTML", "CSS", "Javascript", "React", "Firebase"]}
          />
        </div>
        <div>
          <ProjectCard
            mode={props.mode}
            title="Slack App"
            description="A chatting app with functionality of both [ublic and personal chat with realtime database"
            banner={images.ReactNativeChatting}
            tags={["HTML", "CSS", "Javascript", "React", "Firebase"]}
          />
        </div>
        <div>
          <ProjectCard
            mode={props.mode}
            title="Slack App"
            description="A chatting app with functionality of both [ublic and personal chat with realtime database"
            banner={images.ReactNativeChatting}
            tags={["HTML", "CSS", "Javascript", "React", "Firebase"]}
          />
        </div>
      </div>
    </div>
  );
}
