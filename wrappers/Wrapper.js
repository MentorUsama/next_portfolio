import React from 'react'
import {useTheme} from '../context'
import {Footer,Navigation} from '../components/index'
import * as classes from './Wrapper.module.scss'

export default function Wrapper(props) {
  const theme=useTheme()
  return (
    <div className={`${theme.mode=="light"?classes.light:classes.dark} ${classes.wrapper}`}>
        <div>
        <Navigation mode={theme.mode} setMode={theme.setMode} />
        {props.children}
        <Footer mode={theme.mode} />
        </div>
    </div>
  )
}
