import React from 'react'
import "./Righthand.css"
export default function Righthhand(props) {
    return (
        <div className="righthand" style={{ backgroundColor: props.DarkMode ? '#424253' : 'white', color: props.DarkMode ? 'white' : 'black' }}>
            i am Righthhand side
        </div>
    )
}
