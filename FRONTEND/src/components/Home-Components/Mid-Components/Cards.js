import React from 'react'
import './Cards.css'
export const Cards = (props) => {
    return (
        <section className="card">
            <article>
                <img src={props.image} alt="" />
                <div>
                    <h3>{props.heading}</h3>
                    <h4>{props.name}</h4>
                </div>
            </article>
            <section>
                {props.description}
            </section>
            <div className="skills">
                {
                    props.skills.map((skill,index) => {
                        return (
                            <section key={index} className="glass">{skill}</section>
                        )
                    })
                }
            </div>
            <div className="city-prize">
                <div>{props.place}</div>
                <div>{props.prize}</div>
            </div>
        </section>
    )
}
