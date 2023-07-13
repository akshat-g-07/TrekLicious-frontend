import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./IntroSection.css";
import "./IntroSectionMedia.css";
import DetailPart from "./DetailPart";

const IntroSection = () => {
  return (
    <div className="introSection">
      <Parallax
        pages={2}
        style={{ top: "0", left: "0" }}
        className="introParallax"
      >
        <ParallaxLayer offset={0} speed={0.15}>
          <div className="introParallaxLayer" id="img01"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.75}>
          <div className="introParallaxLayer" id="img02"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="introParallaxLayer" id="img03"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.75}>
          <div className="introParallaxLayer" id="img04"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.55}>
          <div className="introParallaxLayer" id="img05"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.95}>
          <div className="introParallaxLayer" id="img06"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.15}>
          <div className="introParallaxLayer" id="title">
            <p>TrekLicious</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <div className="introParallaxLayer" id="img07"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <DetailPart />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default IntroSection;
