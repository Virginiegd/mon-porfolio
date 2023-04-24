import { NavLink } from "react-router-dom"

function Header() {
    let activeStyle = {
        textDecoration: "underline" 
    }

    return (
        <header>
            <div>
                <div>
                    <nav>
                        <ul className="nav__ul">
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
                    </nav>
                </div>
            </div>
        </header>
    )
    }
    
    export default Header