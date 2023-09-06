import React from 'react';
import { motion } from 'framer-motion';
import "../css/GeneralSection.css"

const GeneralSection = ({ sectionHead, sectionArray }) => {
    return (
        <>
            <div className="generalSection">
                <div className="sectionHeader">
                    <p>{sectionHead}</p>
                </div>
                <div className="sectionBodyHolder">
                    <div className="sectionBody">
                        {sectionArray.map((trek, index) => {
                            return <motion.div key={index} className='sectionBodyItem'
                                onHoverStart={() => {
                                    const sectionHeadValue = sectionHead.replace(/\W/g, "\\$&")
                                    document.querySelector("#" + sectionHeadValue + "_" + index + "_trekHolder").style.transitionDelay = "0s";
                                    document.querySelector("#" + sectionHeadValue + "_" + index + "_img").style.transitionDelay = "0s";
                                    document.querySelector("#" + sectionHeadValue + "_" + index + "_p").style.transitionDelay = "0s";
                                    document.querySelector("#" + sectionHeadValue + "_" + index + "_trekHolder").classList.add("trekHolderHover");
                                    document.querySelector("#" + sectionHeadValue + "_" + index + "_img").classList.add("trekHolderHoverImgP");
                                    document.querySelector("#" + sectionHeadValue + "_" + index + "_p").classList.add("trekHolderHoverImgP");
                                    document.querySelector("#" + sectionHeadValue + "_" + index + "_sectionBodyExpand").style.transitionDelay = "0.5s";
                                    document.querySelector("#" + sectionHeadValue + "_" + index + "_sectionBodyExpand").classList.add("open");
                                }}
                                onHoverEnd={() => {
                                    const sectionHeadValue = sectionHead.replaceAll(/\W/g, "\\$&")
                                    document.querySelector("#" + sectionHeadValue + "_" + index + "_trekHolder").style.transitionDelay = "0.5s";
                                    document.querySelector("#" + sectionHeadValue + "_" + index + "_img").style.transitionDelay = "0.5s";
                                    document.querySelector("#" + sectionHeadValue + "_" + index + "_p").style.transitionDelay = "0.5s";
                                    document.querySelector("#" + sectionHeadValue + "_" + index + "_trekHolder").classList.remove("trekHolderHover");
                                    document.querySelector("#" + sectionHeadValue + "_" + index + "_img").classList.remove("trekHolderHoverImgP");
                                    document.querySelector("#" + sectionHeadValue + "_" + index + "_p").classList.remove("trekHolderHoverImgP");
                                    document.querySelector("#" + sectionHeadValue + "_" + index + "_sectionBodyExpand").style.transitionDelay = "0s";
                                    document.querySelector("#" + sectionHeadValue + "_" + index + "_sectionBodyExpand").classList.remove("open")
                                }}
                                whileTap={{
                                    scale: 0.9
                                }}>
                                <div id={sectionHead + "_" + index + "_trekHolder"} className="trekHolder large sectionImg">
                                    <img id={sectionHead + "_" + index + "_img"} src={trek.img} />
                                    <p id={sectionHead + "_" + index + "_p"} >{trek.name}</p>
                                </div>
                                <div id={sectionHead + "_" + index + "_sectionBodyExpand"} className="sectionBodyExpand">
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
