import React,{useState} from 'react'
import Image from 'next/image'
import {images} from '../../constants/index'
import {BsSun} from 'react-icons/bs'
import {BiMoon} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'


import * as classes from './Navigation.module.scss'
export default function Navigation(props) {
  const [openMenue,setOpenMenue]=useState(false)
  return (
    <div className={classes.navigation__container}>
        {/* Mobile Menue */}
        <div className={classes.mobile__navigation}>
            {openMenue?<div onClick={()=>setOpenMenue(false)} className={classes.mobile__navigation_backdrop}></div>:null}
            {openMenue?
                <div className={classes.mobile__navigation_main}>
                    <div className={classes.icon} >
                        {props.mode=="light"?
                            <div onClick={()=>props.setMode("dark")}><BiMoon /></div>:
                            <div onClick={()=>props.setMode("light")}><BsSun /></div>
                        }
                        <AiOutlineClose onClick={()=>setOpenMenue(false)}/>
                    </div>
                    <ul>
                        {
                            ["About","Gallary","Projects","Skills","Contact"].map((item)=>(
                                <li key={item}><a href={`#${item}`}>{item}</a></li>
                            ))
                        }
                    </ul>
                </div>
            :null}
        </div>
        {/* Main Navigation */}
        <div className={classes.navigation}>
            <div className={classes.navigation__logo}>
                <div><Image src={images.logo} alt="Logo"/></div>
                <h1>M. Usama</h1>
            </div>
            <div className={classes.navigation__links}>
                <ul>
                    {
                        ["About","Gallary","Projects","Skills","Contact"].map((item)=>(
                            <li key={item}><a href={`#${item}`}>{item}</a></li>
                        ))
                    }
                </ul>
            </div>
            <div className={classes.navigation__icons}>
                {props.mode=="light"?
                    <div onClick={()=>props.setMode("dark")}><BiMoon /></div>:
                    <div onClick={()=>props.setMode("light")}><BsSun /></div>
                }
            </div>
            <div className={classes.hamBurger} onClick={()=>setOpenMenue(true)}>
                <GiHamburgerMenu />
            </div>
        </div>
    </div>
  )
}
