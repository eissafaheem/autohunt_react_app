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
import audi from './../../assets/svgs/car-logo/audi.svg'
import fiat from './../../assets/svgs/car-logo/fiat.svg'
import peugeot from './../../assets/svgs/car-logo/peugeot.svg'
import tesla from './../../assets/svgs/car-logo/tesla.svg'
import volvo from './../../assets/svgs/car-logo/volvo.svg'
import hyundai from './../../assets/svgs/car-logo/hyundai.svg'
import InputFieldComponent from '../../_shared/components/input-field/InputField.component'
import { useLandingPageHook } from './LandingPage.hook'

function LandingPageComponent() {

  const {
    setS,
    handleCompareClick,
    recomendedCars,
    compareCars
  } = useLandingPageHook();

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

            {
              recomendedCars.map((car, index) => {
                return <div className={LandingPageStyles["card-item"]}>
                  <CardComponent car={car} />
                </div>
              })
            }

          </div>
        </div>
      </section>

      <section className={LandingPageStyles['compare']}>
        <div className={LandingPageStyles["compare-container"]}>
          <h2>Compare Cars</h2>
          <div className={LandingPageStyles["versus-container"]}>
            <div className={LandingPageStyles["card-item"]}>
              <CardComponent car={compareCars[0]} />
            </div>
            <div className={LandingPageStyles["versus"]}>
              <h1>VS</h1>
            </div>
            <div className={LandingPageStyles["card-item"]}>
              <CardComponent car={compareCars[1]} />
            </div>
          </div>
          <div className={LandingPageStyles['btn-container']}>
            <ButtonComponent text='Compare' type='secondary' onClick={() => { handleCompareClick() }} />
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
                  <h1>40</h1>
                  <p>Sold car</p>
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
          <h2 className={LandingPageStyles['testimonial-heading']}>Testimonials</h2>
        </div>
        <div className={LandingPageStyles["testimonials"]}>
          <div className={LandingPageStyles["testimonial-container"]}>
            <div className={LandingPageStyles["testimonial-card"]}>
              <div className={LandingPageStyles["triangle"]} />
              <div className={LandingPageStyles["card-body"]}>
                <img src={omar} alt="" />
                <div className={LandingPageStyles["content"]}>
                  <h4>Omar Mango</h4>
                  <h4>Customer</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit eos iusto. Non a, sit quisquam ab temporibus minima accusantium?
                  </p>
                </div>
              </div>
            </div>
            <div className={LandingPageStyles["testimonial-card"]}>
              <div className={LandingPageStyles["triangle"]} />
              <div className={LandingPageStyles["card-body"]}>
                <img src={omar} alt="" />
                <div className={LandingPageStyles["content"]}>
                  <h4>Omar Mango</h4>
                  <h4>Customer</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit eos iusto. Non a, sit quisquam ab temporibus minima accusantium?
                  </p>
                </div>
              </div>
            </div>
            <div className={LandingPageStyles["testimonial-card"]}>
              <div className={LandingPageStyles["triangle"]} />
              <div className={LandingPageStyles["card-body"]}>
                <img src={omar} alt="" />
                <div className={LandingPageStyles["content"]}>
                  <h4>Omar Mango</h4>
                  <h4>Customer</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit eos iusto. Non a, sit quisquam ab temporibus minima accusantium?
                  </p>
                </div>
              </div>
            </div>
            <div className={LandingPageStyles["testimonial-card"]}>
              <div className={LandingPageStyles["triangle"]} />
              <div className={LandingPageStyles["card-body"]}>
                <img src={omar} alt="" />
                <div className={LandingPageStyles["content"]}>
                  <h4>Omar Mango</h4>
                  <h4>Customer</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit eos iusto. Non a, sit quisquam ab temporibus minima accusantium?
                  </p>
                </div>
              </div>
            </div>
            <div className={LandingPageStyles["testimonial-card"]}>
              <div className={LandingPageStyles["triangle"]} />
              <div className={LandingPageStyles["card-body"]}>
                <img src={omar} alt="" />
                <div className={LandingPageStyles["content"]}>
                  <h4>Omar Mango</h4>
                  <h4>Customer</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit eos iusto. Non a, sit quisquam ab temporibus minima accusantium?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={LandingPageStyles['contact']}>
        <div className={LandingPageStyles["contact-map"]}>

        </div>
        <div className={LandingPageStyles["contact-container"]}>
          <h2>Contact</h2>
          <br />
          <div className={LandingPageStyles["form"]}>
            <label htmlFor="Name">Name</label>
            <InputFieldComponent placeholder='Full Name' setValue={setS} />
            <br />
            <label htmlFor="Email">Email</label>
            <InputFieldComponent placeholder='email@mail.com' setValue={setS} />
            <br />
            <label htmlFor="Phone">Phone</label>
            <InputFieldComponent placeholder='000-000-0000' setValue={setS} />
            <br />
            <label htmlFor="Comment">Comment</label><br />
            <textarea placeholder='Add your message here...'></textarea>
            <br />
            <br />
            <ButtonComponent text='Send' onClick={() => { }} type='primary' />
          </div>
        </div>
      </section>

      <section className={LandingPageStyles['brands']}>
        <img src={tesla} alt="Fiat" />
        <img src={audi} alt="Audi" />
        <img src={fiat} alt="Fiat" />
        <img src={hyundai} alt="Hyundai" />
        <img src={peugeot} alt="Peugeot" />
        <img src={volvo} alt="Volvo" />
      </section>

    </div>
  )
}

export default LandingPageComponent
