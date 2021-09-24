import React from 'react'
import './CardCollection.css'
import { Cards } from './Cards'

export const CardCollection = (props) => {
    return (
        <div style={{ fontSize: '20px', marginTop: '3vw' }}>
            {props.title}
            <div className="scrollbar">
                {
                    props.card.map((info,index) => {
                        return (
                            <Cards key={index} image={info.imageurl} heading={info.header} name={info.job_creator} description={info.desc} place={info.city} prize={info.payment} skills={info.skills} />
                        )
                    })
                }
            </div>
        </div>
    )
}
