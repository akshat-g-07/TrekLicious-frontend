import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Treks from "./Treks.json";
import TrekParallax from './TrekParallax';
import './SeasonTrekInfo.css';
import './SeasonTrekInfoMedia.css';

const SeasonTrekInfo = () => {
    const genRandomLetter = () => {
        const letters = ['Small', 'Medium', 'Large'];
        const randomIndex = Math.floor(Math.random() * letters.length);
        const randomLetter = letters[randomIndex];
        return randomLetter;
    }

    const SummerTreks = Treks.filter(trek => trek.season === "Summer");
    const MonsoonTreks = Treks.filter(trek => trek.season === "Monsoon");
    const WinterTreks = Treks.filter(trek => trek.season === "Winter");

    const parallaxlayerWidth = window.innerWidth < 768 ? "115px" : "500px"
    const parallaxlayerHeight = window.innerWidth < 768 && "100px"
    const parallaxHeight = window.innerWidth < 768 ? "100px" : "150px"

    return (
        <>
            <div className='introPageSeasonHolder'>
                <div className="introPageTrekHolder">
                    <Parallax pages={Math.ceil(SummerTreks.length / 4)} horizontal style={{ height: parallaxHeight }}>
                        {SummerTreks.map((trek, index) => {
                            return <ParallaxLayer key={index} offset={index / 4} speed={window.innerWidth < 1024 ? 0.25 : parseFloat(Math.random().toFixed(2))} className='introPageTrekSeason'
                                style={{ width: parallaxlayerWidth, height: parallaxlayerHeight }}>
                                <TrekParallax mid={false} treks={trek} dimension={genRandomLetter()} />
                            </ParallaxLayer>
                        })}
                    </Parallax>
                </div>
                <div className="introPageTrekHolder" style={{ transform: "rotateY(-180deg)" }}>
                    <Parallax pages={Math.ceil(MonsoonTreks.length / 4)} horizontal style={{ height: parallaxHeight }}>
                        {MonsoonTreks.map((trek, index) => {
                            return <ParallaxLayer key={index} offset={index / 4} speed={window.innerWidth < 1024 ? 0.25 : parseFloat(Math.random().toFixed(2))} className='introPageTrekSeason' style={{ width: parallaxlayerWidth, height: parallaxlayerHeight }}>
                                <TrekParallax mid={true} treks={trek} dimension={genRandomLetter()} />
                            </ParallaxLayer>
                        })}
                    </Parallax>
                </div>
                <div className="introPageTrekHolder">
                    <Parallax pages={Math.ceil(WinterTreks.length / 4)} horizontal style={{ height: parallaxHeight }}>
                        {WinterTreks.map((trek, index) => {
                            return <ParallaxLayer key={index} offset={index / 4} speed={window.innerWidth < 1024 ? 0.25 : parseFloat(Math.random().toFixed(2))} className='introPageTrekSeason' style={{ width: parallaxlayerWidth, height: parallaxlayerHeight }}>
                                <TrekParallax mid={false} treks={trek} dimension={genRandomLetter()} />
                            </ParallaxLayer>
                        })}
                    </Parallax>
                </div>
            </div>
        </>
    )
}

export default SeasonTrekInfo
