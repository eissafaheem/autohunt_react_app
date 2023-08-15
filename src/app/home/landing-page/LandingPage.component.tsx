import React, { useState } from 'react'
import LandingPageStyles from './LandingPage.module.css'
import CardComponent from '../../_shared/components/card/Card.component'
import carImage from './../../assets/svgs/cars/Tesla.svg'
import rightArrow from './../../assets/svgs/right-arrow.svg'
import ButtonComponent from '../../_shared/components/button/Button.component'
import InputFieldComponent from '../../_shared/components/input-field/InputField.component'

function LandingPageComponent() {

  const [s, setS] = useState<string>("");



  return (
    <div className={LandingPageStyles["main-container"]}>
      <section className={LandingPageStyles['welcome']}>
        <div className={LandingPageStyles["tagline"]}>
          <h1>Find your dream car</h1>
          <p>Discover Your Dream Drive <br /> From Search to Street, All Online</p>
        </div>

        <div className={LandingPageStyles["search-dialog"]}>
          <div><InputFieldComponent placeholder='Search' icon={rightArrow} setValue={setS} /></div>
          <div>Model</div>
          <div>Brand</div>
          <div>Location</div>
          <div>Price Range</div>
          <div>Search</div>
        </div>
      </section>

      <section className={LandingPageStyles['recomended']}>
        <div className={LandingPageStyles["recomended-container"]}>
          <div className={LandingPageStyles["header"]}>
            <h2>Recomended Cars</h2>
            <div className={LandingPageStyles['see-more']}>
              See more
              <img src={rightArrow} alt="Right Arrow" />
            </div>
          </div>
          <div className={LandingPageStyles["card-container"]}>
            <div className={LandingPageStyles["card-item"]}>
              <CardComponent carImage={carImage} fueltype='Electric' isNew={true} location='Florida, USA' name='Tesla Model 3 Standard Range Plus' numberOfSeats='5' price='$56,690' rating={4} reviews={5} wheelDrive='Rear-wheel Drive' year='2020' />
            </div>
            <div className={LandingPageStyles["card-item"]}>
              <CardComponent carImage={carImage} fueltype='Electric' isNew={true} location='Florida, USA' name='Tesla Model 3 Standard Range Plus' numberOfSeats='5' price='$56,690' rating={4} reviews={5} wheelDrive='Rear-wheel Drive' year='2020' />
            </div>
            <div className={LandingPageStyles["card-item"]}>
              <CardComponent carImage={carImage} fueltype='Electric' isNew={true} location='Florida, USA' name='Tesla Model 3 Standard Range Plus' numberOfSeats='5' price='$56,690' rating={4} reviews={5} wheelDrive='Rear-wheel Drive' year='2020' />
            </div>
          </div>
        </div>
      </section>

      <section className={LandingPageStyles['compare']}>
        <div className={LandingPageStyles["compare-container"]}>
          <h2>Compare Cars</h2>
          <div className={LandingPageStyles["versus-container"]}>
            <div className={LandingPageStyles["card-item"]}>
              <CardComponent carImage={carImage} fueltype='Electric' isNew={true} location='Florida, USA' name='Tesla Model 3 Standard Range Plus' numberOfSeats='5' price='$56,690' rating={4} reviews={5} wheelDrive='Rear-wheel Drive' year='2020' />
            </div>
            <div className={LandingPageStyles["versus"]}>
              <h1>VS</h1>
            </div>
            <div className={LandingPageStyles["card-item"]}>
              <CardComponent carImage={carImage} fueltype='Electric' isNew={true} location='Florida, USA' name='Tesla Model 3 Standard Range Plus' numberOfSeats='5' price='$56,690' rating={4} reviews={5} wheelDrive='Rear-wheel Drive' year='2020' />
            </div>
          </div>
          <div className={LandingPageStyles['btn-container']}>
            <ButtonComponent text='Compare' type='secondary' onClick={() => { console.log("ok") }} />
          </div>
        </div>
      </section>

      <section>

      </section>
    </div>
  )
}

export default LandingPageComponent
