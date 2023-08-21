import React from 'react'
import CardComponent from '../../_shared/components/card/Card.component'
import carImage from './../../assets/svgs/cars/Tesla.svg'
import FooterStyles from './Filter.module.css'

function FilterComponent() {
  return (
    <div className={FooterStyles['main-container']}>
      <div className={FooterStyles["header"]}>
        <h1>Search Result</h1>
        <p>Homepage-Search-Search Result</p>
      </div>
      <div className={FooterStyles["content"]}>
        <div className={FooterStyles["filter"]}>
        Filter
        </div>
        <div className={FooterStyles["result"]}>
        Card
        </div>
      </div>
    </div>
  )
}

export default FilterComponent
