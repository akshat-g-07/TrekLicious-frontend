import React from 'react';
import { motion } from "framer-motion";
import Treks from "../landingPage/components/Treks.json";
import "./css/CategoryShow.css";

const CategoryShow = () => {
    const filterParameter = "state";
    const filterValue = "Uttarakhand"

    const trekArray = filterParameter === "state" ? Treks.filter((trek) => trek.state === filterValue) :
        filterValue === "season" ? Treks.filter((trek) => trek.season === filterValue) :
            Treks.filter((trek) => trek.difficulty === filterParameter)

    return (
        <>
            <div className="categoryShow">
                <div className="categoryHead">
                    The Line passed:
                </div>
                <div className="categoryBody">
                    {trekArray.map((trek, index) => {
                        return <motion.div key={index} className='sectionBodyItem'
                            onHoverStart={() => {
                                document.querySelector("#" + "categoryBody" + "_" + index + "_trekHolder").style.transitionDelay = "0s";
                                document.querySelector("#" + "categoryBody" + "_" + index + "_img").style.transitionDelay = "0s";
                                document.querySelector("#" + "categoryBody" + "_" + index + "_p").style.transitionDelay = "0s";
                                document.querySelector("#" + "categoryBody" + "_" + index + "_trekHolder").classList.add("trekHolderHover");
                                document.querySelector("#" + "categoryBody" + "_" + index + "_img").classList.add("trekHolderHoverImgP");
                                document.querySelector("#" + "categoryBody" + "_" + index + "_p").classList.add("trekHolderHoverImgP");
                                document.querySelector("#" + "categoryBody" + "_" + index + "_sectionBodyExpand").style.transitionDelay = "0.5s";
                                document.querySelector("#" + "categoryBody" + "_" + index + "_sectionBodyExpand").classList.add("open");
                            }}
                            onHoverEnd={() => {
                                document.querySelector("#" + "categoryBody" + "_" + index + "_trekHolder").style.transitionDelay = "0.5s";
                                document.querySelector("#" + "categoryBody" + "_" + index + "_img").style.transitionDelay = "0.5s";
                                document.querySelector("#" + "categoryBody" + "_" + index + "_p").style.transitionDelay = "0.5s";
                                document.querySelector("#" + "categoryBody" + "_" + index + "_trekHolder").classList.remove("trekHolderHover");
                                document.querySelector("#" + "categoryBody" + "_" + index + "_img").classList.remove("trekHolderHoverImgP");
                                document.querySelector("#" + "categoryBody" + "_" + index + "_p").classList.remove("trekHolderHoverImgP");
                                document.querySelector("#" + "categoryBody" + "_" + index + "_sectionBodyExpand").style.transitionDelay = "0s";
                                document.querySelector("#" + "categoryBody" + "_" + index + "_sectionBodyExpand").classList.remove("open")
                            }}
                            whileTap={{
                                scale: 0.9
                            }}
                            whileHover={{
                                zIndex: 1
                            }}>
                            <div id={"categoryBody" + "_" + index + "_trekHolder"} className="trekHolder large sectionImg">
                                <img id={"categoryBody" + "_" + index + "_img"} src={trek.img} />
                                <p id={"categoryBody" + "_" + index + "_p"} >{trek.name}</p>
                            </div>
                            <div id={"categoryBody" + "_" + index + "_sectionBodyExpand"} className="sectionBodyExpand">
                                {trek.description}
                            </div>
                        </motion.div>
                    })}
                </div>
            </div>
        </>
    )
}

export default CategoryShow
