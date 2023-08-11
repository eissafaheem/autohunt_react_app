import React from 'react'
import NavbarStyles from './Navbar.module.css'
import BrandLogo from './../../assets/svgs/brand-logo.svg'
import UserIcon from './../../assets/svgs/user-icon.svg'
import GlobeIcon from './../../assets/svgs/globe-icon.svg'

function NavbarComponent() {
  return (
    <div className={NavbarStyles["nav-main-container"]}>
        <div className={NavbarStyles["brand-logo"]}>
            <img src={BrandLogo} alt={NavbarStyles["Auto Hunt Logo"]} />
        </div>
        <div className={NavbarStyles["routing-options"]}>
            <div className={NavbarStyles["option"]}>
                New Cars
            </div>
            <div className={NavbarStyles["option"]}>
                Used Cars
            </div>
            <div className={NavbarStyles["option"]}>
                Compare
            </div>
            <div className={NavbarStyles["option"]}>
                Sell
            </div>
        </div>
        <div className={NavbarStyles["user-options"]}>
            <div className={NavbarStyles["option"]}>
                <img src={UserIcon} alt="User Icon" />
                Sign In
            </div>
            <div className={NavbarStyles["option"]}>
                <img src={GlobeIcon} alt="User Icon" />
                En
            </div>
        </div>
    </div>
  )
}

export default NavbarComponent