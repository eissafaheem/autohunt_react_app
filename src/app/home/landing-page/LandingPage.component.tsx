import React from 'react'
import LandingPageStyles from './LandingPage.module.css'

function LandingPageComponent() {
  return (
    <div className={LandingPageStyles["main-container"]}>
      <div className={LandingPageStyles["tagline"]}>
       <h1>Find your dream car</h1>
       <p>Discover Your Dream Drive <br /> From Search to Street, All Online</p>
      </div>
    </div>
  )
}

export default LandingPageComponent
