import React, { useState } from 'react'
import CompareStyles from './Compare.module.css'
import { Car } from '../../client/classes/Car'
import { useLocation } from 'react-router-dom';
import { useCompareHook } from './Compare.hook';
import InputDropdownComponent from '../../_shared/components/input-dropdown/InputDropdown.component';

function CompareComponent() {

  const {
    car1,
    car2,
    setValue
  } = useCompareHook();

  return (
    <div className={CompareStyles['compare-main-container']}>
      <div className={CompareStyles["header"]}>
        <h1>Eissa Faheem</h1>
        <p>Homepage - Car Details</p>
      </div>
      <div className={CompareStyles["content"]}>
        <table>
          <thead>
            <tr>
              <td></td>
              <td>
                <InputDropdownComponent initialValue='Hii' values={[]} setValue={setValue}/>
              </td>
              <td>
                <InputDropdownComponent initialValue='Hii' values={[]} setValue={setValue}/>
              </td>
            </tr>
            <tr>
              <td>Appearence</td>
              <td><img src={car1.carImage} alt="" /></td>
              <td><img src={car2.carImage} alt="" /></td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{car1.name}</td>
              <td>{car2.name}</td>
            </tr>
            <tr>
              <td>New</td>
              <td>{car1.isNew ? "Yes" : "No"}</td>
              <td>{car2.isNew ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td>location</td>
              <td>{car1.location}</td>
              <td>{car2.location}</td>
            </tr>
            <tr>
              <td>year</td>
              <td>{car1.year}</td>
              <td>{car2.year}</td>
            </tr>
            <tr>
              <td>wheelDrive</td>
              <td>{car1.wheelDrive}</td>
              <td>{car2.wheelDrive}</td>
            </tr>
            <tr>
              <td>fueltype</td>
              <td>{car1.fueltype}</td>
              <td>{car2.fueltype}</td>
            </tr>
            <tr>
              <td>numberOfSeats</td>
              <td>{car1.numberOfSeats}</td>
              <td>{car2.numberOfSeats}</td>
            </tr>
            <tr>
              <td>rating</td>
              <td>{car1.rating}</td>
              <td>{car2.rating}</td>
            </tr>
            <tr>
              <td>reviews</td>
              <td>{car1.reviews}</td>
              <td>{car2.reviews}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{car1.price}</td>
              <td>{car2.price}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default CompareComponent
