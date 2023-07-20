import React from 'react'
import "./TrekParallax.css"
import "./TrekParallaxMedia.css"

const TrekParallax = ({ mid, treks, dimension }) => {
    return (
        <>
            <div className={mid ? `trekHolder ${dimension} midLayer` : `trekHolder ${dimension}`}><img src={treks.img} /><p>{treks.name}</p></div>
        </>
    )
}

export default TrekParallax
