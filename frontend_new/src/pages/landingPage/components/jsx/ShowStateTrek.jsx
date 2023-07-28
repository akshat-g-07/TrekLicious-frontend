import React from 'react'
import "../css/ShowStateTrek.css";

const ShowStateTrek = ({ stateTrekArray }) => {
    return (
        <>
            <div className='stateTrekArrayHolder'>
                {stateTrekArray?.map((trek, index) => {
                    return <div key={index} className='trekHolder Medium statePart'>
                        <img src={trek.img} style={{ height: "100%", width: "100%" }} />
                        <p>{trek.name}</p>
                    </div>
                })}
            </div></>
    )
}

export default ShowStateTrek
