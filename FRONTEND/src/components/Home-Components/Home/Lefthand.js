import React from 'react'
import "./Lefthand.css"
export default function Lefthand(props) {
    return (
        <div className="lefthand" style={{ backgroundColor: props.DarkMode ? '#424253' : 'white', color: props.DarkMode ? 'white' : 'black' }}>
            <h2 className="leftheading">Recent Searches </h2>
            <div className="recentsearch">
             <section className="recentsearchname">
                Web Development
             </section>
             <section className="recentsearchname">
                Backend Development
             </section>
             <section className="recentsearchname">
                Android Development
             </section>
             <section className="recentsearchname">
                Ui/Ux
             </section>
            </div>
            <div className="filters">
                <h2 className="filtersheading">Filters</h2>
                <section className="filtersbox"></section>
                <section className="filtersbox"></section>
                <section className="filtersbox"></section>
                <section className="filtersbox"></section>
            </div>
        </div>
    )
}
