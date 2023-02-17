import React , {useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'

import search from '../assets/searchicon.svg'
import Avatar from '../components/Avatar'
//import Button from '../components/Button'
import './Navbar.css'
import { setCurrentUser } from '../actions/currentUser'
const Navbar = () => {
    const dispatch = useDispatch()
    var User = useSelector((state) => (state.currentUserReducer))
    //console.log(User)
    useEffect(() => {
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))
    },[dispatch])
    return(
        <nav className='nav1'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-btn'>Home</Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                <Link to='/' className='nav-item nav-btn'>For teams</Link>
                <form>
                    <input type='text' placeholder='Search....' />
                    <img src={search} className='search-icon' alt="Search" width='18' />
                </form>
                { 
                
                User === null ?
                <Link to='/Auth' className='nav-item nav-links'>Log in</Link>:
                <>
                    <Avatar><Link className='uname' to='/User'>A</Link></Avatar>
                    <button className='nav-item nav-links'>Log Out</button>
                </>
                }
            </div>
        </nav>
    )
}
export default Navbar