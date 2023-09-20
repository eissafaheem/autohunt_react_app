import React, { useState } from 'react'
import InputFiledStyles from './InputFiled.module.css'

type InputFiledProps = {
  placeholder: string,
  icon?: string,
  setValue: React.Dispatch<React.SetStateAction<string>>
}

function InputFieldComponent(props: InputFiledProps) {

  const {
    icon,
    placeholder,
    setValue
  } = props;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    console.log(event.target.value);
  }
  
  return (
    <div className={InputFiledStyles['main-container']}>
      <div className={InputFiledStyles["icon"]}>
        <img src={icon} alt="" />
      </div>
      <input type="text" placeholder={placeholder} onChange={(event) => { handleChange(event) }} />
    </div>
  )
}

export default InputFieldComponent;
