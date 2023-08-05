import React, { useEffect } from 'react'
import "../css/LogInPageDesign.css"

const LogInPageDesign = () => {

    const toggleOpacity = (elementID) => {
        elementID === "profileNormal" ?
            (() => {
                document.querySelector("#profileNormal").style.opacity = 1
                document.querySelector("#profileUsername").style.opacity = 0
                document.querySelector("#profilePassword").style.opacity = 0
            })() :
            elementID === "profileUsername" ?
                (() => {
                    document.querySelector("#profileNormal").style.opacity = 0
                    document.querySelector("#profileUsername").style.opacity = 1
                    document.querySelector("#profilePassword").style.opacity = 0
                })() :
                (() => {
                    document.querySelector("#profileNormal").style.opacity = 0
                    document.querySelector("#profileUsername").style.opacity = 0
                    document.querySelector("#profilePassword").style.opacity = 1
                })()
    }

    useEffect(() => { toggleOpacity("profileNormal") }, [])

    return (
        <>
            <div className='formHolderBG'>
                <div className='profilePhoto'>
                    <img id="profileNormal" src='images/profileNormal.png' />
                    <img id="profileUsername" src='images/profileUsername.png' />
                    <img id="profilePassword" src='images/profilePassword.png' />
                </div>
                <div className="logInForm">
                    <h2>Username:</h2>
                    <div className='inputHolder'>
                        <input type='email' onFocus={() => toggleOpacity("profileUsername")} onBlur={() => toggleOpacity("profileNormal")} />
                        <div className='palceholderBG'></div>
                    </div>
                    <h2>Password:</h2>
                    <div className='inputHolder'>
                        <input type='password' onFocus={() => toggleOpacity("profilePassword")} onBlur={() => toggleOpacity("profileNormal")} />
                        <div className='palceholderBG'></div>
                    </div>
                    <button type='submit'>
                        Log In
                    </button>
                </div>
                <div className='belowForm'>
                    <p>Don't have one? Create Now:</p>
                    <button>Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default LogInPageDesign
