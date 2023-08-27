import React, { useEffect } from 'react'
import CardStyles from './Card.module.css'
import cornerRibbon from './../../../assets/svgs/corner-ribbon.svg'
import filledStar from './../../../assets/svgs/filled-star.svg'
import unFilledStar from './../../../assets/svgs/unfilled-star.svg'
import calenderIcon from './../../../assets/svgs/calender-icon.svg'
import fuelIcon from './../../../assets/svgs/fuel-icon.svg'
import peopleIcon from './../../../assets/svgs/two-people-icon.svg'
import steeringIcon from './../../../assets/svgs/steering-icon.svg'
import carPlaceholder from './../../../assets/svgs/cars/Tesla.svg'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../utils/Routes'
import { Car } from '../../../client/classes/Car'

export type CarProps = {
    car: Car
}

function CardComponent(props: CarProps) {

    const car = props.car;
    const {
        carImage,
        fueltype,
        isNew,
        location,
        name,
        numberOfSeats,
        price,
        rating,
        reviews,
        wheelDrive,
        year
    } = car || {};

    const navigate = useNavigate();
    function onCardClick(){
        console.log(car);
        navigate(`/${ROUTES.car_info}`, {state:{car}} );
    }

    return (
        <div className={CardStyles['main-container']} onClick={onCardClick}>
            <div className={CardStyles["header"]}>
                <div className={CardStyles["featured-ribbon"]}>
                    <img src={cornerRibbon} alt="Featured" />
                </div>
                <div className={CardStyles["car-image"]}>
                    <img src={carImage || carPlaceholder} alt="Car Image" />
                </div>
                <div className={CardStyles["tag"]}>
                    {
                        isNew ? "New" : "Used"
                    }
                </div>
            </div>
            <div className={CardStyles["content"]}>
                <div className={CardStyles['title']}>
                    {name}
                </div>
                <h2 className={CardStyles["price"]}>{price}</h2>
                <p>{location}</p>
                <div className={CardStyles["other-info"]}>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={calenderIcon} alt="Calender Icon" />
                                    {year}
                                </td>
                                <td>
                                    <img src={steeringIcon} alt="Steering Icon" />
                                    {wheelDrive}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={fuelIcon} alt="Fuel Icon" />
                                    {fueltype}
                                </td>
                                <td>
                                    <img src={peopleIcon} alt="People Icon" />
                                    {numberOfSeats}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <hr />
            <div className={CardStyles["footer"]}>
                {
                    Array.from({ length: Math.floor((rating || 0)) }, (_, index) => (
                        <span className="stars" key={index}>
                            <img src={filledStar} alt="Filled Star" />
                        </span>
                    ))
                }
                {
                    (rating || 0) < 5
                    &&
                    Array.from({ length: (5 - Math.floor((rating || 0))) }, (_, index) => (
                        <span className="stars" key={index}>
                            <img src={unFilledStar} alt="Filled Star" />
                        </span>
                    ))
                }
                <span className={CardStyles['reviws']}>( {reviews} Reviws )</span>
            </div>
        </div>
    )
}

export default CardComponent
