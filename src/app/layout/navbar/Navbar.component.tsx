import React from 'react'
import NavbarStyles from './Navbar.module.css'
import BrandLogo from './../../assets/svgs/brand-logo.svg'
import UserIcon from './../../assets/svgs/user-icon.svg'
import GlobeIcon from './../../assets/svgs/globe-icon.svg'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../_shared/utils/Routes'

function NavbarComponent() {
    return (
        <div className={NavbarStyles["nav-main-container"]}>
            <div className={NavbarStyles["brand-logo"]}>
                <Link to={ROUTES.landing_page}>
                    <img src={BrandLogo} alt={NavbarStyles["Auto Hunt Logo"]} />
                </Link>
            </div>
            <div className={NavbarStyles["routing-options"]}>
                <div className={NavbarStyles["option"]}>
                    <Link to={ROUTES.filter} className={NavbarStyles['nav-text']}>
                        New Cars
                    </Link>
                </div>
                <div className={NavbarStyles["option"]} >
                    <Link to={ROUTES.filter} className={NavbarStyles['nav-text']}>
                        Used Cars
                    </Link>
                </div>
                <div className={NavbarStyles["option"]}>
                    <Link to={ROUTES.compare} className={NavbarStyles['nav-text']}>
                        Compare
                    </Link>
                </div>
                <div className={NavbarStyles["option"]}>
                    <Link to={ROUTES.sell} className={NavbarStyles['nav-text']}>
                        Sell
                    </Link>
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