import React from "react";
import cardFront from "../images/bg-card-front.png";
import cardBack from "../images/bg-card-back.png";
import "../css/leftHero.css";
import cardlogo from "../images/card-logo.svg";

const LeftHero = ({
  ownername,
  creditCardNumber,
  expirationDate,
  expirationMount,
  cvc,
}) => {
  // If creditCardNumber is empty, set a default value
  if (!creditCardNumber) {
    creditCardNumber = "0000 0000 0000 0000"; // Replace with your default value
  }
  if (!ownername) {
    ownername = "John Doe"; // Replace with your default ownername
  }
  if (!expirationDate) {
    expirationDate = "00"; // Replace with your default date
  }
  if (!expirationMount) {
    expirationMount = "00"; // Replace with your default mount
  }
  if (!cvc) {
    cvc = "000"; // Replace with your default cvc
  }
  return (
    <div className="containerLeftHero">
      <div className="top-image">
        <div className="cardcover">
          <img src={cardFront} alt="" />
        </div>
        <div className="cardinfo">
          <img src={cardlogo} className="cardlogo" alt="" />
          <div className="cardnumber">
            <p className="cardNumberDetail">{creditCardNumber}</p>
          </div>
          <div className="cardowner">
            <p className="ownername">{ownername}</p>
            <p className="lastdate">
              <span className="date">{expirationDate}</span>/
              <span className="mount">{expirationMount}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-image">
        <img src={cardBack} alt="" />
        <p className="securityNumber">{cvc}</p>
      </div>
    </div>
  );
};

export default LeftHero;
