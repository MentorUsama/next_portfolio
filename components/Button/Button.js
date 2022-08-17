import React from 'react'
import * as classes from './Button.module.scss'

export default function Button({mode,title,variant="fill"}) {
  return (
    <div className={`${classes.button} ${variant=="outline"?classes.outline:null}`}>
        <p>{title}</p>
    </div>
  )
}
