import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment-solid.svg'
import pen from '../../assets/pen-solid.svg'


const Widget = () => {
    return(            
           <div className='widget'>
                <h4>The Overflow Blog</h4>
                <div className='right-sidebar-div-1'>
                    <div className='right-sidebar-div-2'>
                        <img src={pen} alt='pen' width='18' />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='right-sidebar-div-2'>
                        <img src={pen} alt='pen' width='18' />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <h4>Featured on Meta</h4>
                <div className='right-sidebar-div-1'>
                    <div className='right-sidebar-div-2'>
                        <img src={comment} alt='pen' width='18' />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='right-sidebar-div-2'>
                        <img src={comment} alt='pen' width='18' />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <h4>Hot Meta Posts</h4>
                <div className='right-sidebar-div-1'>
                    <div className='right-sidebar-div-2'>
                        <p>38</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='right-sidebar-div-2'>
                        <p>20</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='right-sidebar-div-2'>
                        <p>38</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
           </div>
    )
}
export default Widget