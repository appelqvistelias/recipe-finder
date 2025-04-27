import React, { useState } from "react";

function unitConverter(fromUnit, amount) {
  const conversions = {
    cup: 2.4, // 1 cup = 2.4 dl
    tbsp: 15, // 1 tbsp = 15 ml
    tsp: 5, // 1 tsp = 5 ml
    oz: 28.35, // 1 oz = 28.35 g
    lb: 0.45, // 1 lb = 0.45 kg
    inch: 2.54, // 1 inch = 2.54 cm
  };

  const result = {
    cup: (amount * conversions["cup"]).toFixed(1) + " dl",
    tbsp: (amount * conversions["tbsp"]).toFixed(0) + " ml",
    tsp: (amount * conversions["tsp"]).toFixed(0) + " ml",
    oz: (amount * conversions["oz"]).toFixed(0) + " g",
    lb: (amount * conversions["lb"]).toFixed(2) + " kg",
    inch: (amount * conversions["inch"]).toFixed(2) + " cm",
  };

  return result[fromUnit] || amount + " " + fromUnit;
}

function UnitConverter() {
  const [amount, setAmount] = useState("");
  const [fromUnit, setFromUnit] = useState("cup");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [error, setError] = useState("");

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === "" || !isNaN(value)) {
      setAmount(value);
      setError("");
    } else {
      setError("Please enter a valid number");
    }
  };

  const handleFromUnitChange = (e) => {
    setFromUnit(e.target.value);
  };

  const handleConvert = () => {
    if (amount === "" || isNaN(amount) || parseFloat(amount) <= 0) {
      setError("Please enter a valid amount greater than zero.");
      setConvertedAmount("");
      return;
    }
    const result = unitConverter(fromUnit, parseFloat(amount));
    setConvertedAmount(result);
  };

  return (
    <div>
      <div>
        <label htmlFor="amount">Amount to convert</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
          aria-describedby="amount-error"
        />
        <label htmlFor="fromUnit">From unit</label>
        <select
          id="fromUnit"
          value={fromUnit}
          onChange={handleFromUnitChange}
          aria-label="Select the unit to convert from"
        >
          <option value="cup">Cup</option>
          <option value="tbsp">Tablespoon (tbsp)</option>
          <option value="oz">Ounce (oz)</option>
          <option value="lb">Pound (lb)</option>
          <option value="inch">Inch (in)</option>
        </select>
      </div>
      <button onClick={handleConvert} aria-label="Convert the entered amount">
        Convert
      </button>
      <div>
        {error && (
          <p id="amount-error" style={{ color: "red" }} role="alert">
            {error}
          </p>
        )}
        {convertedAmount && !error && (
          <p aria-live="polite">
            {amount} {fromUnit} is {convertedAmount}.
          </p>
        )}
      </div>
    </div>
  );
}

export default UnitConverter;
