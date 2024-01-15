import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../Navigation/NavigationData'
import './header.css'

const Header = () => {
  return (
    <div className='main-login'>
    <div className="header-navigation">
      <div className='logo'>
        <Link to={'/'}>
          <img src='https://www.discountedwheelwarehouse.com/media/mf_webp/png/media/logo/websites/1/discounted-wheel-warehouse-logo.webp' alt='logo image' />
        </Link>
      </div>
      <div className='nav'>
        <ul>
          {navItems.map((item,i)=>(
            <li key={i}>
              <NavLink to={item.path}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Header