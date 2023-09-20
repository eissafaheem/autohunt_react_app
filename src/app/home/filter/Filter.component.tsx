import React from 'react'
import CardComponent from '../../_shared/components/card/Card.component'
import carImage from './../../assets/svgs/cars/Tesla.svg'
import FilterStyles from './Filter.module.css'
import { useFilterHook } from './Filter.hook'
import InputFieldComponent from '../../_shared/components/input-field/InputField.component'
import InputDropdownComponent from '../../_shared/components/input-dropdown/InputDropdown.component'

function FilterComponent() {

  const {
    carResults,
    setSearchInput,
    searchInput
  } = useFilterHook();

  return (
    <div className={FilterStyles['main-container']}>
      <div className={FilterStyles["header"]}>
        <h1>Search Result</h1>
        <p>Homepage-Search-Search Result</p>
      </div>
      <div className={FilterStyles["content"]}>
        <div className={FilterStyles["filter"]}>
          <div className={FilterStyles["flter-fields"]}>
            <h2>Filter</h2>
            <div className={FilterStyles["input"]}>
              <InputFieldComponent placeholder='Search' setValue={setSearchInput} />
            </div>
            <div className={FilterStyles["input"]}>
              <InputDropdownComponent initialValue='Year' values={["2019","2020","2021"]} setValue={setSearchInput}/>
            </div>
            <div className={FilterStyles["input"]}>
              <InputDropdownComponent initialValue='Brand' values={["Mercedez", "BMW", "Honda", "Audi"]} setValue={setSearchInput}/>
            </div>
            <div className={FilterStyles["input"]}>
              <InputDropdownComponent initialValue='Fuel Type' values={["Petrol", "Disel", "Electric", "Gasoline" ]} setValue={setSearchInput}/>
            </div>
            <div className={FilterStyles["input"]}>
              <InputDropdownComponent initialValue='Passenger Capacity' values={["2","5","6"]} setValue={setSearchInput}/>
            </div>
            <div className={`${FilterStyles["input"]} ${FilterStyles["radio-input"]}`}>
              <div className={FilterStyles['radio']}>
                <input type='radio' id='all' onChange={()=>{setSearchInput("all")}} name='hand'/>
                All
              </div>
              <div className={FilterStyles['radio']}>
                <input type='radio' id='all' onChange={()=>{setSearchInput("new")}} name='hand'/>
                New
              </div>
              <div className={FilterStyles['radio']}>
                <input type='radio' id='all' onChange={()=>{setSearchInput("used")}} name='hand'/>
                Used
              </div>
            </div>
            <div className={FilterStyles["input"]}>
              <input type='range' className={FilterStyles["range"]} min={"20000"} max={"100000"} onChange={(event)=>{setSearchInput(event.target.value)}}/>
             Price: ${searchInput}
            </div>
          </div>
        </div>
        <div className={FilterStyles["result"]}>
          {
            carResults.map((car, index) => {
              return <div key={index} className={FilterStyles["card-item"]}>
                <CardComponent car={car} />
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default FilterComponent
