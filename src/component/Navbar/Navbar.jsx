import React from 'react'
import {NavLink} from 'react-router-dom';
import '../Navbar/navbar.css'

const Navbar = () => {
    return (
        <div style={{
            padding: '30px',
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            // backgroundImage: `url("https://via.placeholder.com/500")` 
            backgroundColor: '#218ac3'
        
        }}>
            
            <NavLink className="link" exact activeClassName="a" to = "/">Home</NavLink>
            <NavLink className="link" exact activeClassName="a"  to = "/about">About</NavLink>
            <NavLink className="link" exact activeClassName="a"  to = "/contact">Contact</NavLink>
        </div>
        
    )
}

export default Navbar
