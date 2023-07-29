import React, { useState, useEffect } from 'react'
import Treks from "./Treks.json";
import "./StateTrekInfo.css";
import ShowStateTrek from "./ShowStateTrek";

const StateTrekInfo = () => {

    const stateList = [... new Set(Treks.map((trek) => { return trek.state }))]
    const firstHalf = stateList.slice(0, 3)
    const secondHalf = stateList.slice(3, 6)

    const [stateName, setStateName] = useState(null)
    const [stateArray, setStateArray] = useState(null);
    const numberOfItems = window.innerWidth < 768 ? 3 : 6

    function buttonClicked(index) {
        document.querySelector(".clicked")?.classList.remove("clicked")
        document.querySelectorAll(".stateButton")[index].classList.toggle("clicked")
        setStateName(document.querySelectorAll(".stateButton")[index])
    }

    useEffect(() => {
        setStateArray(Treks.filter((trek) => {
            return trek.state === stateName?.innerHTML;
        }).slice(0, numberOfItems))
    }, [stateName])

    return (
        <>
            <div className='stateButtonDivHolder'>
                <div className='stateButtonHolder'>
                    {firstHalf.map((item, index) => {
                        return <button className="stateButton" key={index} onClick={() => buttonClicked(index)}>{item}</button>
                    })}
                </div>
                <div className='stateButtonHolder'>
                    {secondHalf.map((item, index) => {
                        return <button className="stateButton" key={3 + index} onClick={() => buttonClicked(3 + index)}>{item}</button>
                    })}
                </div>
            </div>
            <ShowStateTrek stateTrekArray={stateArray} />
        </>
    )
}

export default StateTrekInfo
