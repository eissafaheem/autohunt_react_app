import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import HomeStyles from './Home.module.css'

function HomeComponent() {
  return (
    <div className={HomeStyles["home-main-container"]}>
      <div className={HomeStyles["tagline"]}>
       <h1>Find your dream car</h1>
       <p>Discover Your Dream Drive <br /> From Search to Street, All Online</p>
      </div>
    </div>
  )
}

export default HomeComponent;
