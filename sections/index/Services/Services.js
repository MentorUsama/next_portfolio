import React from "react";
import { ServiceCard } from "../../../components/index";
import * as classes from "./Services.module.scss";
import { images } from "../../../constants/index";
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
          <ServiceCard
            icon={images.ReactNativeLogo}
            banner={images.web_app}
            title="Web App"
            mode={props.mode}
            description="Convert design into pixel perfect website and integrate backend apis using framework like react."
          />
        </div>
        <div>
          <ServiceCard
            icon={images.ReactNativeLogo}
            banner={images.ReactNativeChatting}
            title="Mobile App"
            mode={props.mode}
            description="Convert your design into mobile app and integrate backend apis using react native framework."
          />
        </div>
        <div>
        <ServiceCard
            icon={images.PWA_ICON}
            banner={images.PWA}
            title="PWA"
            mode={props.mode}
            description="Develop progressive web app that looks and behaves as if it is a mobile app. Without requiring the end user to download any software locally."
          />
        </div>
        {/* <div>
        <ServiceCard
            icon={images.PWA_ICON}
            banner={images.PWA}
            title="PWA"
            mode={props.mode}
            description="Develop progressive web app that looks and behaves as if it is a mobile app. It take advantage of native mobile device features, without requiring the end user to download any software locally."
          />
        </div> */}
      </div>
    </div>
  );
}
