import React, { useEffect } from 'react'
import { CarProps } from '../../_shared/components/card/Card.component'
import CarInfoStyles from "./CarInfo.module.css"
import { useLocation } from 'react-router-dom';
import carOwner from './../../assets/svgs/cars/car-owner.svg'
import filledStar from './../../assets/svgs/filled-star.svg'
import unFilledStar from './../../assets/svgs/unfilled-star.svg'

function CarViwerComponent() {

  const Location = useLocation();

  const {
    carImage,
    fueltype,
    isNew,
    location,
    name,
    numberOfSeats,
    price,
    rating = 0,
    reviews,
    wheelDrive,
    year
  } = Location.state.car;

  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])

  return (
    <div>
      <div className={CarInfoStyles["header"]}>
        <h1>{name}</h1>
        <p>Homepage - Car Details</p>
      </div>
      <div className={CarInfoStyles["content"]}>
        <div className={CarInfoStyles["details"]}>
          <div className={CarInfoStyles["core-info"]}>
            <div className={CarInfoStyles["car-image"]}>
              <img src={carImage} alt="" />
            </div>
            <div className={CarInfoStyles["core-details"]}>
              <h2>Details</h2>
              <table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Fuel Type</td>
                    <td>{fueltype}</td>
                  </tr>
                  <tr>
                    <td>New</td>
                    <td>{isNew ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <td>No of seats</td>
                    <td>{numberOfSeats}</td>
                  </tr>
                  <tr>
                    <td>Wheel Drive</td>
                    <td>{wheelDrive}</td>
                  </tr>
                  <tr>
                    <td>Year</td>
                    <td>{year}</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>{location}</td>
                  </tr>
                  {/* <tr>
                    <td>Rating</td>
                    <td>{rating}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>{price}</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
          <div className={CarInfoStyles["owner-container"]}>

            <div className={CarInfoStyles["description"]}>
              <h2>Description</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia perspiciatis vitae rerum consequatur sit labore illum voluptate quibusdam molestiae, vero qui aspernatur. Maxime, veniam, optio aut sint ipsam, accusamus possimus repellendus eos voluptatibus molestiae omnis quos sit iste officiis quam tempore recusandae totam enim repudiandae corrupti assumenda soluta? Libero sit corporis in quod! Aliquid, iste laboriosam! Fugit, iure? Repellendus earum, et debitis quisquam cumque reiciendis pariatur nemo recusandae architecto explicabo sed, quia unde minus quas veniam soluta labore assumenda, eum rerum? Eos quidem, aspernatur quis dolores dolor iure nesciunt inventore earum quibusdam impedit dolorem autem sequi recusandae assumenda quae illo.</p>
            </div>

            <div className={CarInfoStyles["features"]}>
              <h2>Features</h2>
              <span>Autopilot</span>
              <span>Summon</span>
              <span>Autopark</span>
              <span>Auto Lane Change</span>
              <span>15 Inch Touchscreen Display</span>
              <span>360&deg; Camera</span>
              <span>12 Ultrasonic Sensor</span>
            </div>

            <div className={CarInfoStyles["dealer-info"]}>
              <h2>Dealer Info</h2>
              <div className={CarInfoStyles["info"]}>
                <div className={CarInfoStyles['owner']}>
                  <img src={carOwner} alt="" />
                  <div className={CarInfoStyles["name"]}>
                    <p>Alfredo Gouse</p>
                    <p>Owner</p>
                  </div>
                </div>
                <div className={CarInfoStyles["contact"]}>240-865-3730</div>
                <div className={CarInfoStyles["contact"]}>alfredo.g@mail.com</div>
              </div>
            </div>

            <div className={CarInfoStyles["price-rating"]}>
              {/* <div className={CarInfoStyles["rating"]}>
              {
                    Array.from({ length: rating }, (_, index) => (
                        <span className="stars" key={index}>
                            <img src={filledStar} alt="Filled Star" />
                        </span>
                    ))
                }
                {
                    rating < 5
                    &&
                    Array.from({ length: (5 - rating) }, (_, index) => (
                        <span className="stars" key={index}>
                            <img src={unFilledStar} alt="Filled Star" />
                        </span>
                    ))
                }
                
              </div> */}
              <div className={CarInfoStyles["price"]}>
                {price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarViwerComponent
