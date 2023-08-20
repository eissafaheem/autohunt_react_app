import React from 'react'
import NavbarComponent from './navbar/Navbar.component';
import HomeComponent from '../home/Home.component';
import FooterComponent from './footer/Footer.component';

function LayoutComponent() {
  return (
    <div>
         <NavbarComponent/>
         <HomeComponent/>
         <FooterComponent/>
    </div>
  )
}

export default LayoutComponent;
