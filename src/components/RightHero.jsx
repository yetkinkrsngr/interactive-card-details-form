import React, { useState } from "react";
import "../css/rightHero.css";

const RightHero = () => {
  const [creditCardNumber, setCreditCardNumber] = useState("");

  const formatCreditCardInput = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const formattedValue = inputValue.replace(/(\d{4})(?=\d)/g, "$1 "); // Add a space every 4 digits
    setCreditCardNumber(formattedValue);
  };

  return (
    <>
      <div className="formContainer">
        <form className="form">
          <div className="cardholdername">
            <p className="formTitle">Cardholder Name</p>
            <input className="formInput" type="text" placeholder="John Doe" />
          </div>
          <div className="cardnumberlong">
            <p className="formTitle">Card Number</p>
            <input
              className="formInput"
              type="text"
              value={creditCardNumber}
              onChange={formatCreditCardInput}
              placeholder="0000 0000 0000 0000"
              maxLength={19}
            />
          </div>
          <div className="carddate">
            <div className="carddateleft">
              <p className="formTitle">Exp. Date (MM/YY)</p>
              <input
                className="formInputSmall"
                type="text"
                placeholder="MM"
                maxLength={2}
              />
              <input
                className="formInputSmall"
                type="text"
                placeholder="YY"
                maxLength={2}
              />
            </div>
            <div className="carddateright">
              <p className="formTitle">CVC</p>
              <input
                className="formInputMedium"
                type="text"
                placeholder="000"
                maxLength={3}
              />
            </div>
          </div>
          <div className="submit">
            <button className="submitButton" type="submit">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RightHero;
