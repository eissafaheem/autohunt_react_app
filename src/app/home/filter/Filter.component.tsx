import React from 'react'
import CardComponent from '../../_shared/components/card/Card.component'
import carImage from './../../assets/svgs/cars/Tesla.svg'

function FilterComponent() {
  return (
    <div>
      Filter
      <div style={{ width: "25rem", margin: "5rem" }}>
        <CardComponent carImage={carImage} fueltype='Electric' isNew={true} location='Florida, USA' name='Tesla Model 3 Standard Range Plus' numberOfSeats='5' price='$56,690' rating={4} reviews={5} wheelDrive='Rear-wheel Drive' year='2020' />
      </div>
    </div>
  )
}

export default FilterComponent
