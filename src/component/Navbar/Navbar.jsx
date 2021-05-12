import React from 'react'
import {NavLink} from 'react-router-dom';
import '../Navbar/navbar.css'

const Navbar = () => {
    return (
        <div style={{
            margin: '25px',
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center'
        
        }}>
           
            <NavLink className="link" activeClassName="a" to = "/">Home</NavLink>
            <NavLink className="link" activeClassName="a"  to = "/about">About</NavLink>
            <NavLink className="link" activeClassName="a"  to = "/contact">Contact</NavLink>
        </div>
    )
}

export default Navbar
