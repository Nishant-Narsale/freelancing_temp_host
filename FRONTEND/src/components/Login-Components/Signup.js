import React, { useState } from 'react'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { emailSignUp } from '../../firebase/auth'

export const Signup = (props) => {

    const [visible1, changeVisible1] = useState(false)
    const [visible2, changeVisible2] = useState(false)


    //Sign Up
    const [email, changeEmail] = useState("")
    const [pass, changePass] = useState("")

    //handles - Sign up
    const [emailH, changeEmailH] = useState(true)
    const [passH, changePassH] = useState(true)
    const [cpassH, changeCPassH] = useState(true)

    //handles
    const handleEmail = (_email) => {
        changeEmail(_email.target.value)
        if (_email.target.value.length === 0) changeEmailH(true)
        else changeEmailH(false)
    }

    const handlePass = (_pass) => {
        changePass(_pass.target.value)
        if (_pass.target.value.length === 0) changePassH(true)
        else changePassH(false)
    }

    const handleCPass = (_pass) => {
        if (_pass.target.value.length === 0) changeCPassH(true)
        else changeCPassH(false)
    }

    const SignUp = () => {
        emailSignUp(email, pass)
    }


    return (
        <div>
            <div className="login-text">Sign Up Here</div>
            <div className="login-input">
                <section>
                    <PersonRoundedIcon sx={{ fontSize: 25 }} />
                </section>
                <section>
                    <input type="text" placeholder="UserName" style={{ width: "13.5rem" }}></input>
                </section>
            </div>
            <div className="login-input">
                <section>
                    <PersonRoundedIcon sx={{ fontSize: 25 }} />
                </section>
                <section>
                    <input type="email" placeholder="Email" style={{ width: "13.5rem" }} onChange={text => { handleEmail(text) }}></input>
                </section>
            </div>
            {
                emailH ? <> </> : <div style={{ color: 'red' }}>
                    Invalid Email !!!
                </div>
            }
            <div className="login-input">
                <section>
                    <LockIcon sx={{ fontSize: 25 }} />
                </section>
                <section>
                    <input type={visible1 ? "text" : "password"} placeholder="Password" onChange={text => { handlePass(text) }} ></input>
                </section>
                <section>
                    {visible1 ? <VisibilityRoundedIcon onClick={() => { changeVisible1(false) }} style={{ cursor: 'pointer' }} /> : <VisibilityOffRoundedIcon onClick={() => { changeVisible1(true) }} style={{ cursor: 'pointer' }} />}
                </section>
            </div>
            {
                passH ? <> </> : <div style={{ color: 'red' }}>
                    Password must be min 8 characters
                </div>
            }

            <div className="login-input">
                <section>
                    <LockIcon sx={{ fontSize: 25 }} />
                </section>
                <section>
                    <input type={visible2 ? "text" : "password"} placeholder="Confirm Password" onChange={(text) => { handleCPass(text) }}></input>
                </section>
                <section>
                    {visible2 ? <VisibilityRoundedIcon onClick={() => { changeVisible2(false) }} style={{ cursor: 'pointer' }} /> : <VisibilityOffRoundedIcon onClick={() => { changeVisible2(true) }} style={{ cursor: 'pointer' }} />}
                </section>
            </div>
            {
                cpassH ? <> </> : <div style={{ color: 'red' }}>
                    Your Password Doesn't match
                </div>
            }
            <div>
                <input on type="checkbox"></input>Do You Agree to our Terms and Policy
            </div>
            <div className="login-button">
                <button onClick={SignUp}>Sign Up</button>
            </div>
            <div>
                <p onClick={props.login} style={{ cursor: 'pointer' }}> Login Instead</p>
            </div>
        </div>
    )
}
