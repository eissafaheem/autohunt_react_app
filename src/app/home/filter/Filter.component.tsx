import React from 'react'
import CardComponent from '../../_shared/components/card/Card.component'
import carImage from './../../assets/svgs/cars/Tesla.svg'
import FilterStyles from './Filter.module.css'
import { useFilterHook } from './Filter.hook'

function FilterComponent() {

  const {
    carResults
  } = useFilterHook();

  return (
    <div className={FilterStyles['main-container']}>
      <div className={FilterStyles["header"]}>
        <h1>Search Result</h1>
        <p>Homepage-Search-Search Result</p>
      </div>
      <div className={FilterStyles["content"]}>
        <div className={FilterStyles["filter"]}>
          Filter
        </div>
        <div className={FilterStyles["result"]}>
          {
            carResults.map((car, index) => {
              return <div className={FilterStyles["card-item"]}>
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
