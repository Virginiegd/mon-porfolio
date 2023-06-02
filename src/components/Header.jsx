import { NavLink } from "react-router-dom"
import { useState} from "react"

function Header() {
    let activeStyle = {
        textDecoration: "underline" 
    }

    // Menu fermé par défaut
    const [showLinks, setShowLinks] = useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <header>
            <div className="container">
                    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
                        <ul className="nav__ul ">
                            <li><NavLink className='nav__a' to="/" style={({ isActive }) =>
                                isActive ? activeStyle : undefined} > Home </NavLink></li>
                            <li><NavLink className='nav__a' to="/about" style={({ isActive }) =>
                                isActive ? activeStyle : undefined} > About </NavLink></li>
                            <li><NavLink className='nav__a' to="/skills" style={({ isActive }) =>
                                isActive ? activeStyle : undefined} > Skills </NavLink></li>
                            <li><NavLink className='nav__a' to="/portfolio" style={({ isActive }) =>
                                isActive ? activeStyle : undefined} > Portfolio </NavLink></li>
                            <li><NavLink className='nav__a' to="/contact" style={({ isActive }) =>
                                isActive ? activeStyle : undefined} > Contact </NavLink></li>
                        </ul>
                        <button className="navbar__burger" onClick={handleShowLinks}>
                            <span className="burger-line"></span>
                        </button>
                    </nav>
            </div>
        </header>
    )
    }
    
    export default Header