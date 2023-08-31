import React from 'react';
import "../css/MainDiv.css"
import Treks from "../../../landingPage/components/Treks.json"
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';

const MainDiv = () => {

    const trekList = Treks.filter(trek => trek.season === "Monsoon").map(({ name, description }) => ({ name, description }))
    const trek = trekList[Math.floor(Math.random() * trekList.length)]

    return (
        <>
            <div className='mainDivClass'>
                <video src="videos/vid02.mp4" muted autoPlay loop className='bgVideo'></video>
                <div className='mainDivHolder'>
                    <div className='mainDivName'>
                        {trek.name}
                    </div>
                    <div className='mainDivDesc'>
                        {trek.description}
                    </div>
                    <div className='mainDivButton'>
                        <Button variant="contained" startIcon={<InfoIcon />} sx={{ backgroundColor: "#5D5A58" }}>
                            More Info
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainDiv
