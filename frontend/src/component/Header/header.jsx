import React from 'react'
import { NavLink } from 'react-router-dom'
import { navItems } from '../Navigation/NavigationData'

const Header = () => {
  return (
    <>
       <div className="header-navigation">
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

    </>
  )
}

export default Header