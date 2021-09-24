import React, { useEffect } from 'react'
import "./Mid.css"

import midLogo from '../../../images/Mid-logo.png'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import { CardCollection } from '../Mid-Components/CardCollection';
import data from '../../../data.json'
const axios = require('axios');

export default function Mid(props) {

    const getdata = async () => {
        await axios.get('http://127.0.0.1:8000/api/jobs').then((data) => data.data.forEach((e) => {
            console.log(e)
        }))
    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <div className="midbox" style={{ backgroundColor: props.DarkMode ? '#1E1E2D' : 'white', color: props.DarkMode ? 'white' : 'black' }}>
            <div className="container" >
                <div className="svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2a5470" fillOpacity="0.6" d="M0,288L48,277.3C96,267,192,245,288,240C384,235,480,245,576,250.7C672,256,768,256,864,218.7C960,181,1056,107,1152,96C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                </div>

                <div className="combine">
                    <SearchSharpIcon style={{ color: 'black' }} />
                    <input
                        className="inputtag"
                        type="text"
                        placeholder="Search For a job"
                    />
                </div>

                <img className="imgmain" src={midLogo} alt="logo"></img>
            </div>
            <section className="Jobs">
                <div className="info">
                    Find great talent. Build your business.Take your career to the next level.
                </div>
                {
                    data.map((cardcollection, index) => {
                        return (
                            <CardCollection key={index} title={cardcollection.title} card={cardcollection.category} />
                        )
                    })
                }
            </section>
        </div>
    )
}


