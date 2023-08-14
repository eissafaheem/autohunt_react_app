import React from 'react'
import NavbarComponent from './navbar/Navbar.component';
import HomeComponent from '../home/Home.component';

function LayoutComponent() {
  return (
    <div>
         <NavbarComponent/>
         <HomeComponent/>
    </div>
  )
}

export default LayoutComponent;
