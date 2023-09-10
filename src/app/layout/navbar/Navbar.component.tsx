import React, { useState } from 'react'
import NavbarStyles from './Navbar.module.css'
import BrandLogo from './../../assets/svgs/brand-logo.svg'
import UserIcon from './../../assets/svgs/user-icon.svg'
import GlobeIcon from './../../assets/svgs/globe-icon.svg'
import menuIcon from './../../assets/svgs/menu-icon.svg'
import closeIcon from './../../assets/svgs/close-icon.svg'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../_shared/utils/Routes'

function NavbarComponent() {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true)

    return (
        <div className={NavbarStyles["nav-main-container"]}>
            <div className={NavbarStyles["brand"]}>
                <Link to={ROUTES.landing_page} className={NavbarStyles['brand-logo']}>
                    <img src={BrandLogo} alt={NavbarStyles["Auto Hunt Logo"]} />
                </Link>
                <div className={NavbarStyles['menu']} onClick={() => { setIsMenuOpen(!isMenuOpen) }} title={isMenuOpen ? "Close" : "Menu"}>
                    <img src={isMenuOpen ? closeIcon : menuIcon} alt={isMenuOpen ? "Close" : "Menu"} />
                </div>
            </div>
            <div className={`${NavbarStyles["options"]} ${isMenuOpen && NavbarStyles['options-visible']}`}>
                <div className={NavbarStyles["option"]}>
                    <Link to={ROUTES.landing_page} className={NavbarStyles['nav-text']}>
                        Home
                    </Link>
                </div>
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
                {/* <div className={NavbarStyles["option"]}>
                    <Link to={ROUTES.sell} className={NavbarStyles['nav-text']}>
                        Sell
                    </Link>
                </div> */}
                {/* <div className={NavbarStyles["option"]}>
                    <img src={UserIcon} alt="User Icon" />
                    <Link to={ROUTES.sell} className={NavbarStyles['nav-text']}>
                        Sign In
                    </Link>
                </div>
                <div className={NavbarStyles["option"]}>
                    <img src={GlobeIcon} alt="User Icon" />
                    <Link to={ROUTES.sell} className={NavbarStyles['nav-text']}>
                        En
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default NavbarComponent