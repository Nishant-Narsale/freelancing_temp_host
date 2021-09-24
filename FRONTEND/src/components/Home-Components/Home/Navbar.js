import React from 'react'
import './Navbar.css'

import { Avatar } from "@material-ui/core";
export default function Navbar(props) {
    return (
        <>
            <div className="navbar" style={{ backgroundColor: props.DarkMode ? '#2A2A40' : 'white', color: props.DarkMode ? 'white' : 'black' }}>
                <div>
                    LOGO
                </div>
                <div className="right-navbar">
                    <div>Apply</div>
                    <div>My Applications</div>
                    <div>Messages</div>
                    <div>Help</div>
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <input className="switchinput" type="checkbox" id="checkbox1" onClick={() => props.SetDarkMode()} />
                        <label htmlFor="checkbox1"></label>
                    </div>
                    <Avatar />
                </div>

            </div>
        </>
    )
}
