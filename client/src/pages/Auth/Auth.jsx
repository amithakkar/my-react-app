import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Aboutauth from './Aboutauth'
import './Auth.css'
import { signup , login } from '../../actions/auth'
const Auth = () => {
    const [isSignup, setIsSignup] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email && !password){
            alert("Enter email and password")
        }
        if(isSignup){
            if(!name){
                alert("Enter a name to continue")
            }
            dispatch(signup({name,email,password}, navigate))
        }else {
            dispatch(login ({email, password}, navigate))
        }
       // console.log({name, email, password})
    }
    return(
        <section className='auth-section'>
            { isSignup && <Aboutauth />
            }
            <div className="auth-container-2">
                <form onSubmit={handleSubmit}>
                    {
                        isSignup && (
                            <label htmlFor='name'>
                                <h4>Display Name</h4>
                                <input type="taxt" name='name' id='name' onChange={(e) => {setName(e.target.value)}} />
                            </label>
                        )
                    }
                    <label htmlFor='email'>
                        <h4>Email</h4>
                        <input type='email' name='email' id='email' onChange={(e) => {setEmail(e.target.value)}} />
                    </label>
                    <label htmlFor='password'>
                        <div style={{display:"flex", justifyContent:'space-between'}}>
                        <h4>Password</h4>
                        { !isSignup && <p style={{color:"#666767", fontSize:"13px"}}>Forgot password?</p>}
                        </div>
                        <input type='password' name='password' id='password' autoComplete='on' onChange={(e) => {setPassword(e.target.value)}} />
                        {isSignup && <p style={{color:"#666767", fontSize:"13px"}}>Passwords must contain at least eight <br />characters, including at least 1 letter 
                        and 1 number.</p>}
                    </label>
                    {
                        isSignup && (
                            <label htmlFor='check'>
                                <input type='checkbox' id='check'/>
                                <p style={{color:"#666767", fontSize:"13px"}}>Opt-in to receive occasional <br />product updates, user research invitations, 
                                <br />company announcements, and digests.</p>
                            </label>
                        )
                    }
                    <button type='submit' className='auth-btn' >{isSignup ? 'Sign Up' :'Log in'}</button>
                    {
                        isSignup && (
                            <p style={{color:"#666767", fontSize:"13px"}}>By clicking “Sign up”, you agree to our 
                            <span style={{color:"#007ac6"}}>terms of <br />service</span>,
                            <span style={{color:"#007ac6"}}>privacy policy</span>  
                            and cookie policy</p>
                        )
                    }
                </form>
                <p>
                    {isSignup ? 'Already have an account?' : "Dont't have an account?"}
                    <button type='button' className='handle-switch-off' onClick={handleSwitch}>{isSignup ? "Log in" : "Sign up"}</button>
                </p>
            </div>

        </section>
    )
}
export default Auth