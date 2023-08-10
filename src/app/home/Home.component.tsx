import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function HomeComponent() {
  return (
    <div>
        Home
        <br />
        <Link to='/layout'>1</Link>
        <br />
        <br />
        <Link to='/input'>2</Link>
        <Outlet/>
    </div>
  )
}

export default HomeComponent;
