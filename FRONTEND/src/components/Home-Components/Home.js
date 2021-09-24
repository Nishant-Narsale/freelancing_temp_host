import React, { useState } from 'react'
import Navbar from './Home/Navbar'
import Lefthand from './Home/Lefthand'
import Righthand from './Home/Righthhand'
import Mid from './Home/Mid'

export const Home = () => {
    const [darkMode, changeDarkMode] = useState(true)

    // Function Which will be called As Global
    const setdarkMode = () => {
        if (darkMode) changeDarkMode(false)
        else changeDarkMode(true)
    }
    return (
        <div>
            <Navbar SetDarkMode={setdarkMode} DarkMode={darkMode} />
            <div className="maincontainer">
                <Lefthand DarkMode={darkMode} />
                <Mid DarkMode={darkMode} />
                <Righthand DarkMode={darkMode} />
            </div>
        </div>
    )
}
