import React from "react";
import { SkillsCard } from "../../../components/index";
import { images } from "../../../constants/index";
import * as classes from "./Skills.module.scss";
export default function Skills(props) {
  return (
    <>
      <div style={{ paddingBottom: '80px' }}        id="Skills" ></div>
      <div

        className={`${classes.skills} ${props.mode == "light" ? classes.light : classes.dark
          }`}
      >
        <h1 className={classes.title}>Skills</h1>
        <div className={classes.skills__cotnainer}>
          {props.skills.map((skill) => (
            <div key={skill.id}>
              <SkillsCard
                icon={`${skill.image}`}
                mode={props.mode}
                title={skill.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
