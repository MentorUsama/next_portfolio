import React from 'react'
import {SkillsCard} from '../../../components/index'
import {images} from '../../../constants/index'
import * as classes from './Skills.module.scss'
export default function Skills(props) {
  return (
    <div className={`${classes.skills} ${props.mode == "light" ? classes.light : classes.dark}`}>
        <h1 className={classes.title}>Skills</h1>
        <div className={classes.skills__cotnainer}>
            <div><SkillsCard icon={images.skills_html} mode={props.mode} title="HTML" /></div>
            <div><SkillsCard icon={images.skills_css}  mode={props.mode} title="CSS" /></div>
            <div><SkillsCard icon={images.skills_javascript}  mode={props.mode} title="Javascript"  /></div>
            <div><SkillsCard icon={images.skills_bootstrap}  mode={props.mode} title="Bootstrap"  /></div>
            <div><SkillsCard icon={images.ReactNativeLogo}  mode={props.mode} title="React"  /></div>
            <div><SkillsCard icon={images.skills_next_js}  mode={props.mode} title="Next Js" /></div>
            <div><SkillsCard icon={images.ReactNativeLogo}  mode={props.mode} title="React Native" /></div>
            <div><SkillsCard icon={images.skills_material_ui}  mode={props.mode} title="Material UI"  /></div>
            <div><SkillsCard icon={images.skills_django}  mode={props.mode} title="Django"  /></div>
            <div><SkillsCard icon={images.skills_firebase}  mode={props.mode} title="Firebase"  /></div>
        </div>
    </div>
  )
}
