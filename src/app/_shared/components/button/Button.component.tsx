import React from 'react'
import ButtonStyles from './Button.module.css'

type ButtonProps ={
    text: string
    type: "primary" | "secondary"
    onClick() : void
}

function ButtonComponent(props: ButtonProps) {

    const {
        type,
        text,
        onClick
    } = props;

  return (
    <div className={`${ButtonStyles['btn']} ${ButtonStyles[type]}`} onClick={onClick}>
      {text}
    </div>
  )
}

export default ButtonComponent
