import React, { useState } from 'react'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import LockIcon from '@mui/icons-material/Lock';
import apple from '../../images/apple-logo.png';
import google from '../../images/google-logo.png';
import facebook from '../../images/facebook-logo.png';
import github from '../../images/github-logo.png';
import { emailLogin, login } from '../../firebase/auth'

export const Login = (props) => {

    const [visible1, changeVisible1] = useState(false)

    //Login
    const [emailL, changeEmailL] = useState("")
    const [passL, changePassL] = useState("")

    //handles -Login
    const [emailHL, changeEmailHL] = useState(true)
    const [passHL, changePassHL] = useState(true)

    //logged

    const handleEmailHL = (_email) => {
        changeEmailL(_email.target.value)
        if (_email.target.value.length === 0) changeEmailHL(true)
        else changeEmailHL(false)
    }

    const handlePassHL = (_pass) => {
        changePassL(_pass.target.value)
        if (_pass.target.value.length === 0) changePassHL(true)
        else changePassHL(false)
    }

    const LogIn = () => {
        console.log(emailL + " " + passL)
        emailLogin(emailL, passL)
    }

    return (
        <div>
            <div className="login-text">Login to Your Account</div>
            <div className="login-input">
                <section>
                    <PersonRoundedIcon sx={{ fontSize: 25 }} />
                </section>
                <section>
                    <input type="email" placeholder="UserName or Email" style={{ width: "13.5rem" }} onChange={text => { handleEmailHL(text) }}></input>
                </section>
            </div>
            {
                emailHL ? <> </> : <div style={{ color: 'red' }}>
                    Invalid Email !!!
                </div>
            }
            <div className="login-input">
                <section>
                    <LockIcon sx={{ fontSize: 25 }} />
                </section>
                <section>
                    <input type={visible1 ? "text" : "password"} placeholder="Password" onChange={text => { handlePassHL(text) }}></input>
                </section>
                <section>
                    {visible1 ? <VisibilityRoundedIcon onClick={() => { changeVisible1(false) }} style={{ cursor: 'pointer' }} /> : <VisibilityOffRoundedIcon onClick={() => { changeVisible1(true) }} style={{ cursor: 'pointer' }} />}
                </section>
            </div>
            {
                passHL ? <> </> : <div style={{ color: 'red' }}>
                    Password must be min 8 characters
                </div>
            }
            <div className="login-button">
                <button onClick={LogIn}>Log In</button>
            </div>
            <div>
                Or Continue with
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <img onClick={login} src={google} alt="" style={{ height: 40, width: 40, cursor: 'pointer' }} />
                <img src={facebook} alt="" style={{ height: 50, width: 50, cursor: 'pointer' }} />
                <img src={github} alt="" style={{ height: 37, width: 37, cursor: 'pointer' }} />
                <img src={apple} alt="" style={{ height: 45, width: 55, cursor: 'pointer' }} />
            </div>
            <div>
                Don't have an account?
            </div>
            <div className="signup-button">
                <button onClick={props.signup}>Sign Up Here</button>
            </div>
        </div>
    )
}
