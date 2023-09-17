import React from 'react';
import "../css/TDPBody.css";
import TerrainIcon from '@mui/icons-material/Terrain';
import MapIcon from '@mui/icons-material/Map';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const TDPBody = () => {
    return (
        <>
            <div className="formHolderBG tdpBody">
                <div className="tdpTrekName">
                    Roopkund
                </div>
                <div className="tdpDetailsHolder">
                    <div className='tdpDetail'>
                        <MapIcon />  State : {"Uttarakhand"}
                    </div>
                    <div className='tdpDetail'>
                        <WbSunnyIcon /> Season : {"Monsoon"}
                    </div>
                    <div className='tdpDetail'>
                        <TerrainIcon /> Difficulty : {"Easy"}
                    </div>
                </div>
                <div className="tdpDescription">
                    {"some description"}
                </div>

            </div>
        </>
    )
}

export default TDPBody
