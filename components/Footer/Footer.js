import React from 'react'
import { ContactCard } from '../index'
import { images } from '../../constants/index'
import * as classes from './Footer.module.scss'

export default function Footer(props) {
  return (
    <div  className={`${classes.footer} ${props.mode == "light" ? classes.light : classes.dark}`}>
      <h1>Get In Touch</h1>
    <div className={classes.contacts}>
      <a>
        <ContactCard mode={props.mode} icon={images.github} title="Github" />
      </a>
      <a>
        <ContactCard mode={props.mode} icon={images.linkedin} title="Linkedin" />
      </a>
      <a>
        <ContactCard mode={props.mode} icon={images.gmail} title="Gmail" />
      </a>
      <a>
        <ContactCard mode={props.mode} icon={images.whatsapp} title="Whatsapp" />
      </a>
      <a>
        <ContactCard mode={props.mode} icon={images.upwork} title="Upwork" />
      </a>
    </div>
    </div>
  )
}
