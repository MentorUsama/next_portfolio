import React, { useEffect, useState } from "react";
import Image from "next/image";
import * as classes from "./Hero.module.scss";
import { images } from "../../../constants/index";
import { Button } from '../../../components/index'
import { useAnimationControls, motion } from 'framer-motion'
export default function Hero(props) {
  const [text, setText] = useState("Frontend Developer");
  const controls = useAnimationControls()
  useEffect(() => {
    const timer = setTimeout(() => {
      if (text == "Frontend Developer") setText("Backend Developer");
      else setText("Frontend Developer");
      controls.start({ scale: 2 })
    }, 5000);
    return () => clearTimeout(timer);
  });
  return (
    <>
      <div style={{ }}         id="About"></div>

      <div

        className={`${classes.hero} ${props.mode == "light" ? classes.light : classes.dark
          }`}
      >
        {/* Content */}
        <motion.div animate={{ x: [-100, 0] }} transition={{ duraction: 0.4 }} >
          <div className={classes.hero__title2}>
            <h3>Hey folks my name is muhammad usama</h3>
          </div>
          <div className={classes.hero__title1}>
            <h1>I&apos;m <span>{text}</span></h1>
          </div>
          <p className={classes.hero__text}>
            I am a web developer with extensive experience in frontend technologies like HTML, CSS, Bootstrap, Javascript, React and React native and backend technologies like Django, Django rest framework, and firebase.
          </p>
          <div className={classes.hero__buttonContainer}>
            <a href="https://www.upwork.com/freelancers/~01a36c260b24da516c"><Button title="Hire Me" /></a>
            <a href="#Projects"><Button variant="outline" title="Projects" /></a>
          </div>
        </motion.div>
        {/* Image */}
        <motion.div animate={{ x: [100, 0] }} transition={{ duraction: 0.4 }}>
          <Image src={images.heroImage} alt="Hero Image" />
        </motion.div>
      </div>
    </>
  );
}
