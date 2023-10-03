import React from "react";
import cardFront from "../images/bg-card-front.png";
import cardBack from "../images/bg-card-back.png";
import "../css/leftHero.css";
import cardlogo from "../images/card-logo.svg";
const LeftHero = () => {
  return (
    <div className="containerLeftHero">
      <div className="top-image">
        <div className="cardcover">
          <img src={cardFront} alt="" />
        </div>
        <div className="cardinfo">
          <img src={cardlogo} className="cardlogo" alt="" />
          <div className="cardnumber">
            <p>0123 4567 8901 2345</p>
          </div>
          <div className="cardowner">
            <p className="ownername">Yetkin karasungur</p>
            <p className="lastdate">
              <span className="date">30</span>/<span className="mount">04</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-image">
        <img src={cardBack} alt="" />
        <p className="securityNumber">000</p>
      </div>
    </div>
  );
};

export default LeftHero;
