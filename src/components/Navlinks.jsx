import React from 'react'
import links from "../utils/links"
import { NavLink } from "react-router-dom"
import { useDashboardContext } from '../pages/DashboardLayout'


const Navlinks = ({isBigSidebar}) => {
  const {toggleSidebar, user}=useDashboardContext()
  return (
    <div className="nav-links">
    {links.map( link => {
      const { text, path, icon } = link
      return (
        <div key={text}>
          <NavLink  to={path}  className='nav-link' 
          onClick={isBigSidebar? null: toggleSidebar} end>
            <span className="icon">
              {icon}
            </span>
            {text}
          </NavLink >
        </div>
      )
    })}
  </div>
  )
}

export default Navlinks
