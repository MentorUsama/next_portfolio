import React from 'react'
import Image from 'next/image'
import {images} from '../../constants/index'
import * as classes from './ServiceCard.module.scss'
export default function ServiceCard(props) {
  return (
    <div className={`${classes.card} ${props.mode == "light" ? classes.light : classes.dark}`}>
        <div className={classes.image__container}>
            <div className={classes.card__image}>
                <Image src={images.ReactNativeChatting} alt="React Native Icon" />
            </div>
            <div className={classes.card__header}>
                <div className={classes.card__header_icon}><Image src={images.ReactNativeLogo} alt="React Native Icon" /></div>
                <div className={classes.card__header_title}>
                    <p>React Native</p>
                </div>
            </div>
        </div>
        <div className={classes.card__content}>
            <p>Framework use to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP using the React framework along with native platform capabilities.</p>
        </div>
    </div>
  )
}
