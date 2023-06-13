import { NavLink } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import AuthContext from "../store/authContext"


const Header = () => {
const {userId, logout} = useContext(AuthContext)

  return (
    userId ? (
    <nav className="head">
      <header className="header-text">Manly Bikes!</header>
        {/* <NavLink to='/'>Auth</NavLink> */}
        <NavLink to='/bars'>Bars</NavLink>
        <NavLink to='/body'>Body</NavLink>
        <NavLink to='/fork'>Fork</NavLink>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/pedals'>Pedals</NavLink>
        <NavLink to='/suspension'>Suspension</NavLink>
        <NavLink to='/tires'>Tires</NavLink>
        <button onClick={logout}>Logout</button>
    </nav>
    ) : null
  )
}

export default Header