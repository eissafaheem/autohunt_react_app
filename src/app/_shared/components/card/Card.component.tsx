import React, { useEffect } from 'react'
import CardStyles from './Card.module.css'
import cornerRibbon from './../../../assets/svgs/corner-ribbon.svg'
import filledStar from './../../../assets/svgs/filled-star.svg'
import unFilledStar from './../../../assets/svgs/unfilled-star.svg'
import calenderIcon from './../../../assets/svgs/calender-icon.svg'
import fuelIcon from './../../../assets/svgs/fuel-icon.svg'
import peopleIcon from './../../../assets/svgs/two-people-icon.svg'
import steeringIcon from './../../../assets/svgs/steering-icon.svg'

export type CardComponentProps = {
    carImage: string
    isNew: boolean
    name: string,
    price: string,
    location: string,
    year: string,
    wheelDrive: string,
    fueltype: string,
    numberOfSeats: string,
    rating: number,
    reviews: number
}

function CardComponent(props: CardComponentProps) {

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
    } = props;

    return (
        <div className={CardStyles['main-container']}>
            <div className={CardStyles["header"]}>
                <div className={CardStyles["featured-ribbon"]}>
                    <img src={cornerRibbon} alt="Featured" />
                </div>
                <div className={CardStyles["car-image"]}>
                    <img src={carImage} alt="Car Image" />
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
                <span className={CardStyles['reviws']}>( {reviews} Reviws )</span>
            </div>
        </div>
    )
}

export default CardComponent
