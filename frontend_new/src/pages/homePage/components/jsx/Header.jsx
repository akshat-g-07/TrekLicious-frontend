import React from 'react';
import Switch from './Switch';
import ProfileIcon from './ProfileIcon';
import SearchBox from './SearchBox';
import "../css/Header.css"

const Header = () => {
    return (
        <>
            <header className='headerClass day'>
                <div className="headerTitle">TrekLicious</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "25%" }}>
                    <div style={{ width: "80%", alignItems: "end", overflow: "hidden" }}>
                        <SearchBox />
                    </div>
                    <div style={{ overflow: "hidden", cursor: "pointer" }} onClick={() => {
                        document.querySelector(".headerClass").classList.toggle("day")
                        document.querySelector(".switchClass").classList.toggle("day")
                        document.querySelector(".searchIcon").classList.toggle("day")
                    }}>
                        <Switch />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <ProfileIcon />
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header
