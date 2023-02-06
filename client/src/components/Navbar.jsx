import React from 'react'
import { Link } from 'react-router-dom'

import search from '../assets/searchicon.svg'
import Avatar from '../components/Avatar'
//import Button from '../components/Button'
import './Navbar.css'
const Navbar = () => {
    var User = null
    return(
        <nav className='nav1'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-btn'>Home</Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                <Link to='/' className='nav-item nav-btn'>For teams</Link>
                <form>
                    <input type='text' placeholder='Search....' />
                    <img src={search} alt="Search" width='18' />
                </form>
                { User === null ?
                <Link to='/Auth' className='nav-item nav-links'>Log in</Link>:
                <>
                    <Avatar><Link to='/User' style={{color:'black',textDecoration:'none'}}>M</Link></Avatar>
                    <button className='nav-item nav-links'>Log Out</button>
                </>
                }
            </div>
        </nav>
    )
}
export default Navbar