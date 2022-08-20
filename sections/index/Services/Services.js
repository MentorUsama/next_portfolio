import React from "react";
import { ServiceCard } from "../../../components/index";
import * as classes from "./Services.module.scss";
import { images } from "../../../constants/index";
export default function Services(props) {
  return (
    <>
      <div style={{ paddingBottom: '80px' }}         id="Services" ></div>
      <div

        className={`${classes.services} ${props.mode == "light" ? classes.light : classes.dark
          }`}
      >
        <h1 className={classes.heading}>Services</h1>
        <div className={classes.service_container}>
          {props.services.map((service) => (
            <div key={service.id}>
              <ServiceCard
                icon={service.icon}
                banner={service.image}
                title={service.title}
                mode={props.mode}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
