import React from 'react';
import "../css/TDPHeader.css"

const TDPHeader = () => {
    const src = "images/Roopkund.jpg"
    return (
        <>
            <div className="tdpHeader">
                <img src={src} />
            </div>
        </>
    )
}

export default TDPHeader
