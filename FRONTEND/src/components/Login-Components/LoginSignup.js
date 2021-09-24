import React, { useState } from 'react'
import { Signup } from './Signup';
import './Login.css'
import { Login } from './Login';

export const LoginSignup = () => {

    // To hanlde click on Sign Up Button to Sign up
    const [signup, changeSignup] = useState(false)

    return (

        <div className="login-page">
            {/* {logged ? <Redirect to="/home" /> : <></>} */}
            <section className="main-login">
                {signup ?
                    <Signup login={() => { changeSignup(false) }} />
                    :
                    <Login signup={() => { changeSignup(true) }} />
                }

            </section >
            <section className="image-login">
                Image
            </section>
        </div >
    )
}