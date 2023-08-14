import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import HomeStyles from './Home.module.css'

function HomeComponent() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default HomeComponent;
