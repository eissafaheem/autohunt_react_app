import React from 'react'
import FooterStyles from './Footer.module.css'
import brandLogo from './../../assets/svgs/brand-logo.svg'

function FooterComponent() {
    return (
        <div className={FooterStyles['main-container']}>
            <div className={FooterStyles["top"]}>
                <img src={brandLogo} alt="Autohunt" />
            </div>
            <div className={FooterStyles["curved-hr"]} />
            <div className={FooterStyles["middle"]}>
                <div>
                    About Us
                    <br />
                    FAQ
                    <br />
                    Contact
                </div>
                <div>
                    Customer Service
                    <br />
                    info@autohunt.com
                    <br />
                    880-896-2596
                </div>
                <div>
                    3926 Calvin Street,
                    <br />
                    Baltimore, Maryland,
                    <br />
                    21201,
                    <br />
                    United State
                </div>
            </div>
            <div className={FooterStyles["curved-hr"]} />
            <div className={FooterStyles["bottom"]}>
                2021 Autohunt. All Rights reserved
            </div>
        </div>
    )
}

export default FooterComponent
