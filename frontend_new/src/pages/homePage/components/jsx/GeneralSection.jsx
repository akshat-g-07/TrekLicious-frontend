import React from 'react';
import { motion } from 'framer-motion';
import "../css/GeneralSection.css"

const GeneralSection = ({ sectionHead, sectionArray }) => {
    console.log(sectionArray)
    return (
        <>
            <div className="generalSection">
                <div className="sectionHeader">
                    {sectionHead}
                </div>
                <div className="sectionBodyHolder">
                    <div className="sectionBody">
                        {sectionArray.map((trek, index) => {
                            return <motion.div key={index} className='sectionBodyItem'
                                onHoverStart={() => {
                                    document.querySelectorAll(".trekHolder")[index].style.transitionDelay = "0s";
                                    document.querySelectorAll(".trekHolder img")[index].style.transitionDelay = "0s";
                                    document.querySelectorAll(".trekHolder p")[index].style.transitionDelay = "0s";
                                    document.querySelectorAll(".trekHolder")[index].classList.add("trekHolderHover");
                                    document.querySelectorAll(".trekHolder img")[index].classList.add("trekHolderHoverImgP");
                                    document.querySelectorAll(".trekHolder p")[index].classList.add("trekHolderHoverImgP");
                                    document.querySelectorAll(".sectionBodyExpand")[index].style.transitionDelay = "0.5s";
                                    document.querySelectorAll(".sectionBodyExpand")[index].classList.add("open");
                                }}
                                onHoverEnd={() => {
                                    document.querySelectorAll(".trekHolder")[index].style.transitionDelay = "0.5s";
                                    document.querySelectorAll(".trekHolder img")[index].style.transitionDelay = "0.5s";
                                    document.querySelectorAll(".trekHolder p")[index].style.transitionDelay = "0.5s";
                                    document.querySelectorAll(".trekHolder")[index].classList.remove("trekHolderHover");
                                    document.querySelectorAll(".trekHolder img")[index].classList.remove("trekHolderHoverImgP");
                                    document.querySelectorAll(".trekHolder p")[index].classList.remove("trekHolderHoverImgP");
                                    document.querySelectorAll(".sectionBodyExpand")[index].style.transitionDelay = "0s";
                                    document.querySelectorAll(".sectionBodyExpand")[index].classList.remove("open")
                                }}
                                whileTap={{
                                    scale: 0.9
                                }}>
                                <div className="trekHolder large sectionImg">
                                    <img src={trek.img} />
                                    <p>{trek.name}</p>
                                </div>
                                <div className="sectionBodyExpand">
                                    {trek.description}
                                </div>
                            </motion.div>
                        }
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default GeneralSection
