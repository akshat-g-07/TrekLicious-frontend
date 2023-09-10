import React from 'react';
import "../css/SideSection.css"

const SideSection = () => {
    return (
        <>
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
