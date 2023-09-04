import React from "react"
import { Link, NavLink } from "react-router-dom"
import userLogo from "/assets/images/avatar-icon.png"

const logg = localStorage.getItem('loggedin')
console.log(logg)
export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                    className="host__link"
                    to="host"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="about"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                
                <Link to={logg ? 'host' : 'login'} className="login-link">
                    <img 
                        src={userLogo} 
                        className="login-icon"
                    />
                </Link>
                <button className="fake-log" onClick={fakeLogOut}>Log out</button>
            </nav>
        </header>
    )
}