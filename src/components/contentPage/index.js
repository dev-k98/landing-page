import React from "react";
import "./contentPage.css";
import hex1 from "../../static/Polygon1.png";
import hex2 from "../../static/Polygon2.png";
import hex3 from "../../static/Polygon3.png";
import hex4 from "../../static/Polygon4.png";
import hex5 from "../../static/Polygon5.png";

const ContentPage = () => {
  return (
    <div className="content-page">
      <span>
        <img className="images5" src={hex5} alt="" />
      </span>
      <span>
        <img className="images3" src={hex3} alt="" />
      </span>
      <span>
        <img className="images1" src={hex1} alt="" />
      </span>
      <span>
        <img className="images4" src={hex4} alt="" />
      </span>
      <span>
        <img className="images2" src={hex2} alt="" />
      </span>
      <div className="text-content">
        <span className="sub-header">Incredible!</span>
        <span className="main-header">India</span>
        <span className="content">
          One of the oldest civilizations in the world, India is a mosaic of
          multicultural experiences. With a rich heritage and myriad
          attractions, the country is among the most popular tourist
          destinations in the world.
        </span>
      </div>
    </div>
  );
};

export default ContentPage;
