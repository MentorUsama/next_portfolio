import React,{useState} from "react";
import * as classes from "./Projects.module.scss";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import {images} from '../../../constants/index'
import Multiselect from 'multiselect-react-dropdown';
import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function Projects(props) {
  const all_skills=[
    {name: 'Option 1️', id: 1},
    {name: 'Option 2️', id: 2},
    {name: 'Option 3', id: 3},
    {name: 'Option 4', id: 4},
    {name: 'Option 5', id: 5},
    {name: 'Option 6', id: 6},
    {name: 'Option 7', id: 7},
    {name: 'Option 8', id: 8}
  ]
  const all_services=[
    {name: 'Any', id: 0},
    {name: 'Service 1️', id: 1},
    {name: 'service 2️', id: 2},
    {name: 'service 3', id: 3},
    {name: 'service 4', id: 4},
    {name: 'service 5', id: 5},
    {name: 'service 6', id: 6},
    {name: 'service 7', id: 7},
    {name: 'service 8', id: 8}
  ]
  const [selectedSkill,setSelectedSkill]=useState([])
  const [selctedService,setSelectedService]=useState([all_services[0]])

  console.log(selectedSkill)
  function onSelect(selectedList, selectedItem) {
    setSelectedSkill(selectedList)
  }
  function onRemove(selectedList, removedItem) {
    setSelectedSkill(selectedList)
  }

  function onServiceSelect(selectedList, selectedItem) {
    setSelectedService([selectedItem])
  }
  function onServiceRemoved(selectedList, selectedItem) {
    setSelectedService([selectedItem])
  }
  return (
    <div
      className={`${classes.projects} ${
        props.mode == "light" ? classes.light : classes.dark
      }`}
    >
      <h1>Projects</h1>
      <div className={classes.selectection__container}>
        <div className={`single project-multi-selector ${props.mode=="light"?"light":"dark"}`}>
          <Multiselect
            options={all_services} // Options to display in the dropdown
            selectedValues={selctedService} // Preselected value to persist in dropdown
            onSelect={onServiceSelect} // Function will trigger on select event
            onRemove={onServiceRemoved}
            displayValue="name" // Property name to display in the dropdown options
            placeholder="Select Services"
            singleSelect
            style={{
              multiselectContainer:{minHeight:'42px',height:"100%"},
              searchBox:{height:'100%'},
            }}
          />
        </div>
        <div className={`project-multi-selector multiple ${props.mode=="light"?"light":"dark"}`}>
          <Multiselect
            options={all_skills} // Options to display in the dropdown
            selectedValues={selectedSkill} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            placeholder="Select Skills"
            style={{
              multiselectContainer:{minHeight:'42px'},
              searchBox:{height:'100%',minHeight:'42px'},
            }}
            customCloseIcon={<div style={{marginLeft:"5px",display:"flex",alignItems:"center",cursor:'pointer'}}><AiOutlineCloseCircle /></div>}
          />
        </div>
      </div>
      <div className={classes.projects__container}>
        <div><ProjectCard mode={props.mode} title="Slack App" description="A chatting app with functionality of both [ublic and personal chat with realtime database" banner={images.ReactNativeChatting} tags={["HTML","CSS","Javascript","React","Firebase"]} /></div>
        <div><ProjectCard mode={props.mode} title="Slack App" description="A chatting app with functionality of both [ublic and personal chat with realtime database" banner={images.ReactNativeChatting} tags={["HTML","CSS","Javascript","React","Firebase"]} /></div>
        <div><ProjectCard mode={props.mode} title="Slack App" description="A chatting app with functionality of both [ublic and personal chat with realtime database" banner={images.ReactNativeChatting} tags={["HTML","CSS","Javascript","React","Firebase"]} /></div>
        <div><ProjectCard mode={props.mode} title="Slack App" description="A chatting app with functionality of both [ublic and personal chat with realtime database" banner={images.ReactNativeChatting} tags={["HTML","CSS","Javascript","React","Firebase"]} /></div>
        <div><ProjectCard mode={props.mode} title="Slack App" description="A chatting app with functionality of both [ublic and personal chat with realtime database" banner={images.ReactNativeChatting} tags={["HTML","CSS","Javascript","React","Firebase"]} /></div>
      </div>
    </div>
  );
}
