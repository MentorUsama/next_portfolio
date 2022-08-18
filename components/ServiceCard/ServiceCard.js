import React from 'react'
import Image from 'next/image'
import * as classes from './ServiceCard.module.scss'
export default function ServiceCard(props) {
  return (
    <div className={`${classes.card} ${props.mode == "light" ? classes.light : classes.dark}`}>
        <div className={classes.image__container}>
            <div className={classes.card__image}>
                <Image src={props.banner} alt="React Native Icon" objectFit='contain'  />
            </div>
            <div className={classes.card__header}>
                <div className={classes.card__header_icon}><Image src={props.icon} alt="React Native Icon" /></div>
                <div className={classes.card__header_title}>
                    <p>{props.title}</p>
                </div>
            </div>
        </div>
        <div className={classes.card__content}>
            <p>{props.description}</p>
        </div>
    </div>
  )
}
