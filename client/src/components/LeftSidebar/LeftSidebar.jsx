import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'

const LeftSidebar = () => {
    return(            
              <div className='left-sidebar'>
                <nav className='side-nav'>
                    <NavLink to='/' className='side-nav-links' >
                        <p>Home</p>
                    </NavLink>
                    <div className='side-nav-div'>
                        <div><p>Public</p></div>
                        <NavLink to='/Questions' className='side-nav-links'  style={{paddingleft:"40px"}}>
                            <p style={{paddingLeft:"10px"}}>Questions</p>
                        </NavLink>
                        <NavLink to='/Tags'style={{paddingleft:"40px"}} className='side-nav-links' >
                            <p>Tags</p>
                        </NavLink>
                        <NavLink to='/Users'style={{paddingleft:"40px"}} className='side-nav-links' >
                            <p>Users</p>
                        </NavLink>
                        
                    </div>
                </nav>
              </div>  
    )
}
export default LeftSidebar