import React, { useState } from "react";
import "./App.css";
import LeftHero from "./components/LeftHero";
import RightHero from "./components/RightHero";

function App() {
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [cardOwner, setCardOwner] = useState("");
  const [expirationDate, setExpirationDate] = useState(""); // Add state for expiration
  const [expirationMount, setExpirationMount] = useState(""); // Add state for expiration
  const [cvc, setCvc] = useState(""); // Add state for cvc
  const handleCreditCardChange = (
    formattedValue,
    ownerName,
    expDate,
    expMount,
    cvc
  ) => {
    setCreditCardNumber(formattedValue);
    setCardOwner(ownerName); // Update the card owner's name
    setExpirationDate(expDate);
    setExpirationMount(expMount);
    setCvc(cvc);
  };

  return (
    <>
      <div className="container">
        <div className="leftside">
          <LeftHero
            creditCardNumber={creditCardNumber}
            ownername={cardOwner}
            expirationDate={expirationDate}
            expirationMount={expirationMount}
            cvc={cvc}
          />
        </div>
        <div className="rightside">
          <RightHero onCreditCardChange={handleCreditCardChange} />
        </div>
      </div>
    </>
  );
}

export default App; // Bu satırı dosyanın en üstüne taşıdık.
