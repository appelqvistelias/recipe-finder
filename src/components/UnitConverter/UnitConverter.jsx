import React, { useState } from "react";

function unitConverter(fromUnit, toUnit, amount) {
  const conversions = {
    cup: 2.4, // 1 cup = 2.4 dl
    tbsp: 15, // 1 tbsp = 15 ml
    tsp: 5, // 1 tsp = 5 ml
    oz: 28.35, // 1 oz = 28.35 g
    lb: 0.45, // 1 lb = 0.45 kg
  };

  if (fromUnit === "cup" && toUnit === "dl") {
    return (amount * conversions["cup"]).toFixed(1) + " dl";
  }
  if (fromUnit === "tbsp" && toUnit === "ml") {
    return (amount * conversions["tbsp"]).toFixed(0) + " ml";
  }
  if (fromUnit === "oz" && toUnit === "g") {
    return (amount * conversions["oz"]).toFixed(0) + " g";
  }
  if (fromUnit === "lb" && toUnit === "kg") {
    return (amount * conversions["lb"]).toFixed(2) + " kg";
  }

  return amount + " " + fromUnit;
}

function UnitConverter() {
  const [amount, setAmount] = useState("");
  const [fromUnit, setFromUnit] = useState("cup");
  const [toUnit, setToUnit] = useState("dl");
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

  const handleToUnitChange = (e) => {
    setToUnit(e.target.value);
  };

  const handleConvert = () => {
    if (amount === "" || isNaN(amount) || parseFloat(amount) <= 0) {
      setError("Please enter a valid amount greater than zero.");
      return;
    }
    const result = unitConverter(fromUnit, toUnit, parseFloat(amount));
    setConvertedAmount(result);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
        />
        <select value={fromUnit} onChange={handleFromUnitChange}>
          <option value="cup">Cup</option>
          <option value="tbsp">Tablespoon (tbsp)</option>
          <option value="oz">Ounce (oz)</option>
          <option value="lb">Pound (lb)</option>
        </select>
        <span> to </span>
        <select value={toUnit} onChange={handleToUnitChange}>
          <option value="dl">Deciliter (dl)</option>
          <option value="ml">Milliliter (ml)</option>
          <option value="g">Gram (g)</option>
          <option value="kg">Kilogram (kg)</option>
        </select>
      </div>
      <button onClick={handleConvert}>Convert</button>
      <div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {convertedAmount && !error && (
          <p>
            {amount} {fromUnit} is {convertedAmount}.
          </p>
        )}
      </div>
    </div>
  );
}

export default UnitConverter;
