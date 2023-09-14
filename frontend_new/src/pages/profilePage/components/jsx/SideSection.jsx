import React from 'react';
import Button from '@mui/material/Button';
import ForwardIcon from '@mui/icons-material/Forward';
import "../css/SideSection.css"

const SideSection = () => {
    return (
        <>
            <Button variant="outlined" sx={{ position: "fixed", top: "5%", left: "10%" }} startIcon={<ForwardIcon sx={{ transform: "rotateZ(180deg)" }} />}>Back</Button>
            <div className="sideSectionHolder">
                <div className="profileSide sideSelected" onClick={() => {
                    document.querySelector(".favoriteSide").classList.remove("sideSelected")
                    document.querySelector(".preferenceSide").classList.remove("sideSelected")
                    document.querySelector(".profileSide").classList.add("sideSelected")
                }}>
                    My Profile
                </div>
                <div className="favoriteSide" onClick={() => {
                    document.querySelector(".profileSide").classList.remove("sideSelected")
                    document.querySelector(".preferenceSide").classList.remove("sideSelected")
                    document.querySelector(".favoriteSide").classList.add("sideSelected")
                }}>
                    My Favorites
                </div>
                <div className="preferenceSide" onClick={() => {
                    document.querySelector(".profileSide").classList.remove("sideSelected")
                    document.querySelector(".favoriteSide").classList.remove("sideSelected")
                    document.querySelector(".preferenceSide").classList.add("sideSelected")
                }}>
                    My Preferences
                </div>
            </div>
        </>
    )
}

export default SideSection
