import React from "react";
import { ServiceCard } from "../../../components/index";
import * as classes from "./Services.module.scss";
export default function Services(props) {
  return (
    <div
      className={`${classes.services} ${
        props.mode == "light" ? classes.light : classes.dark
      }`}
    >
      <h1 className={classes.heading}>Services</h1>
      <div className={classes.service_container}>
        <div>
            <ServiceCard mode={props.mode} />
        </div>
        <div>
            <ServiceCard mode={props.mode} />
        </div>
        <div>
            <ServiceCard mode={props.mode} />
        </div>
      </div>
    </div>
  );
}
