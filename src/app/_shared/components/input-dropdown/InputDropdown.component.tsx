import React from 'react'
import InputDropDownStyles from './InputDropdown.module.css'

type InputDropdownProps = {
  values: string[],
  initialValue: string
  icon?: string,
  setValue: React.Dispatch<React.SetStateAction<string>>
}

function InputDropdownComponent(props: InputDropdownProps) {

  const {
    initialValue,
    values = ["1", "2", "3"],
    icon,
    setValue
  } = props;

  return (
    <div className={InputDropDownStyles['dropdown-container']}>
      <div >
        {initialValue}
      </div>
      <div className={InputDropDownStyles["options-container"]}>
        {
          values.map((value, index) => {
            return <div className={InputDropDownStyles["option"]}>
              <input type="checkbox" value={value} onChange={() => { setValue(value) }} />
              <div>{value}</div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default InputDropdownComponent