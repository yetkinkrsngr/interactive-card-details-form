import React, { useState } from "react";
import "../css/rightHero.css";

const RightHero = ({ onCreditCardChange }) => {
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [cardOwner, setCardOwner] = useState("");
  const [expirationDate, setExpirationDate] = useState(""); // Add state for expiration
  const [expirationMount, setExpirationMount] = useState("");
  const [cvc, setCvc] = useState("");
  const formatCreditCardInput = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const formattedValue = inputValue.replace(/(\d{4})(?=\d)/g, "$1 "); // Add a space every 4 digits
    setCreditCardNumber(formattedValue);
    onCreditCardChange(
      formattedValue,
      cardOwner,
      expirationDate,
      expirationMount,
      cvc
    );
  };
  const handleCardOwnerChange = (e) => {
    const ownerName = e.target.value;
    setCardOwner(ownerName);
    onCreditCardChange(
      creditCardNumber,
      ownerName,
      expirationDate,
      expirationMount
    );
  };

  const handleExpirationDateChange = (e) => {
    const expDate = e.target.value;
    setExpirationDate(expDate);
    onCreditCardChange(creditCardNumber, cardOwner, expDate, expirationMount);
  };

  const handleExpirationMountChange = (e) => {
    const expMount = e.target.value;
    setExpirationMount(expMount);
    onCreditCardChange(creditCardNumber, cardOwner, expirationDate, expMount);
  };
  const handleCvcChange = (e) => {
    const cvcValue = e.target.value; // Correctly set cvcValue
    setCvc(cvcValue); // Set the cvc state
    onCreditCardChange(
      creditCardNumber,
      cardOwner,
      expirationDate,
      expirationMount,
      cvcValue // Pass the correct cvcValue to onCreditCardChange
    );
  };
  return (
    <>
      <div className="formContainer">
        <form className="form">
          <div className="cardholdername">
            <p className="formTitle">Cardholder Name</p>
            <input
              className="formInput"
              type="text"
              value={cardOwner}
              onChange={handleCardOwnerChange} // Call the new handler
              placeholder="John Doe"
            />
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
                onChange={handleExpirationDateChange}
                placeholder="DD"
                maxLength={2}
              />
              <input
                className="formInputSmall"
                type="text"
                onChange={handleExpirationMountChange}
                placeholder="MM"
                maxLength={2}
              />
            </div>
            <div className="carddateright">
              <p className="formTitle">{handleCvcChange}</p>
              <input
                className="formInputMedium"
                type="text"
                onChange={handleCvcChange}
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
