import React, { useState } from "react";
import Image from "next/image";
import { images } from "../../constants/index";
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

import * as classes from "./Navigation.module.scss";
export default function Navigation(props) {
  const [openMenue, setOpenMenue] = useState(false);
  return (
    <div
      className={`${classes.navigation__container} ${
        props.mode == "light" ? classes.light : classes.dark
      }`}
    >
      {/* Mobile Menue */}
      <div className={classes.mobile__navigation}>
        {
          <AnimatePresence>
            {openMenue?
            <motion.div
              animate={{ opacity: [0, 1] }}
              onClick={() => setOpenMenue(false)}
              className={classes.mobile__navigation_backdrop}
              exit={{opacity:[1,0]}}
            ></motion.div>
            :null}
          </AnimatePresence>
        }
        {
          <AnimatePresence>
            {openMenue?
            <motion.div
              className={classes.mobile__navigation_main}
              animate={{ x: ["80vw", "0vw"] }}
              exit={{x:["0vw","80vw"]}}
            >
              <div className={classes.icon}>
                {props.mode == "light" ? (
                  <div onClick={() => props.setMode("dark")}>
                    <BiMoon />
                  </div>
                ) : (
                  <div onClick={() => props.setMode("light")}>
                    <BsSun />
                  </div>
                )}
                <AiOutlineClose onClick={() => setOpenMenue(false)} />
              </div>
              <ul>
                {["About", "Services", "Skills", "Projects", "Feedback","Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a href={`#${item}`}>{item}</a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
            :null}
          </AnimatePresence>
        }
      </div>
      {/* Main Navigation */}
      <div className={classes.navigation}>
        <div className={classes.navigation__logo}>
          <div>
            <Image src={images.logo} alt="Logo" />
          </div>
          <h1>M. Usama</h1>
        </div>
        <div className={classes.navigation__links}>
          <ul>
            {["About", "Services", "Skills", "Projects", "Feedback","Contact"].map(
              (item) => (
                <li key={item}>
                  <motion.a href={`#${item}`}>{item}</motion.a>
                </li>
              )
            )}
          </ul>
        </div>
        <div className={classes.navigation__icons}>
          {props.mode == "light" ? (
            <motion.div
              whileHover={{ opacity: 0.5, transition: { duration: 0.2 } }}
              onClick={() => props.setMode("dark")}
            >
              <BiMoon />
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ opacity: 0.5, transition: { duration: 0.2 } }}
              onClick={() => props.setMode("light")}
            >
              <BsSun />
            </motion.div>
          )}
        </div>
        <div className={classes.hamBurger} onClick={() => setOpenMenue(true)}>
          <motion.div
            whileHover={{ opacity: 0.6, transition: { duration: 0.2 } }}
          >
            <GiHamburgerMenu />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
