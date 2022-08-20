import React from 'react'
import {useTheme} from '../context'
import {Footer,Navigation} from '../components/index'

export default function Wrapper(props) {
  const theme=useTheme()
  return (
    <div className={theme.mode}>
        <Navigation mode={theme.mode} setMode={theme.setMode} />
        {props.children}
        <Footer mode={theme.mode} />
    </div>
  )
}
