import React, { useState } from 'react'
import LandingPageStyles from './LandingPage.module.css'
import CardComponent from '../../_shared/components/card/Card.component'
import carImage from './../../assets/svgs/cars/Tesla.svg'
import aboutUsCar from './../../assets/svgs/cars/about-us-car.svg'
import ButtonComponent from '../../_shared/components/button/Button.component'
import rightArrow from './../../assets/svgs/right-arrow.svg'
import searchIcon from './../../assets/svgs/magnifying-icon.svg'
import locationIcon from './../../assets/svgs/location-icon.svg'
import newCarIcon from './../../assets/svgs/new-car-icon.svg'
import usedCarIcon from './../../assets/svgs/used-car-icon.svg'
import sellCarIcon from './../../assets/svgs/sell-car-icon.svg'
import omar from './../../assets/svgs/persons/omar.svg'
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
          <div><InputFieldComponent placeholder='Search' icon={searchIcon} setValue={setS} /></div>
          <div><InputFieldComponent placeholder='Model' icon={searchIcon} setValue={setS} /></div>
          <div><InputFieldComponent placeholder='Brand' icon={searchIcon} setValue={setS} /></div>
          <div><InputFieldComponent placeholder='Location' icon={locationIcon} setValue={setS} /></div>
          <div><InputFieldComponent placeholder='Price Range' icon={locationIcon} setValue={setS} /></div>
          <div><ButtonComponent onClick={() => { }} text='Search' type='primary' /></div>
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

      <section className={LandingPageStyles['about-us']}>
        <div className={LandingPageStyles["info"]}>
          <h1>About Us</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit optio obcaecati corrupti molestiae, enim amet, quos dolorum facilis quidem expedita unde reprehenderit ratione voluptatum recusandae, animi nulla ipsam aut quibusdam voluptate distinctio quia asperiores libero et repellendus! Dignissimos, cumque laudantium. Sint cumque, aliquid cupiditate rerum repellat iure cum aut a.</p>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <h1>150</h1>
                  <p>Vehicle in stoack</p>
                </td>
                <td>
                  <h1>150</h1>
                  <p>Vehicle in stoack</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h1>38</h1>
                  <p>Happy customer</p>
                </td>
                <td>
                  <h1>5</h1>
                  <p>Awards</p>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className={LandingPageStyles["car-image"]}>
          <img src={aboutUsCar} alt="Car Image" />
        </div>
      </section>

      <section className={LandingPageStyles['our-services']}>
        <div className={LandingPageStyles["service"]}>
          <h2>Our Services</h2>
          <div className={LandingPageStyles["service-card-container"]}>
            <div className={LandingPageStyles["service-card"]}>
              <img src={newCarIcon} alt="" />
              <p>By a new car</p>
            </div>
            <div className={LandingPageStyles["service-card"]}>
              <img src={usedCarIcon} alt="" />
              <p>By a used car</p>
            </div>
            <div className={LandingPageStyles["service-card"]}>
              <img src={sellCarIcon} alt="" />
              <p>Sell my car</p>
            </div>
          </div>
          <h2>Testimonials</h2>
        </div>
        <div className={LandingPageStyles["testimonials"]}>
          <div className={LandingPageStyles["testimonial-container"]}>
            <div className={LandingPageStyles["testimonial-card"]}>
              <div className={LandingPageStyles["triangle"]}>

              </div>
              <div className={LandingPageStyles["card-content"]}>
                <img src={omar} alt="" />
                <div className="user">
                  <h4>Omar Mango</h4>
                </div>
              </div>
            </div>
            <div className={LandingPageStyles["testimonial-card"]}>1</div>
            <div className={LandingPageStyles["testimonial-card"]}>1</div>
            <div className={LandingPageStyles["testimonial-card"]}>1</div>
            <div className={LandingPageStyles["testimonial-card"]}>1</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPageComponent
