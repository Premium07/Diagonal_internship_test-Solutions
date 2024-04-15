"use client";
import React from "react";

import { useState } from "react";

function validateRoman(roman) {
  const validChars = "IVXLCDM";
  for (let char of roman) {
    if (!validChars.includes(char)) {
      return false;
    }
  }
  return true;
}

function romanToInt(roman) {
  const romanDict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let prevValue = 0;
  for (let char of roman) {
    const value = romanDict[char];
    result += value;
    if (prevValue < value) {
      result -= 2 * prevValue;
    }
    prevValue = value;
  }
  return result;
}
const RomanConverter = () => {
  const [romanInput, setRomanInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateRoman(romanInput)) {
      setError("Invalid Roman numeral. Please try again.");
      setResult("");
      return;
    }
    const number = romanToInt(romanInput.toUpperCase());
    setResult(`The equivalent number is: ${number}`);
    setError("");
  };

  return (
    <div className="">
      <h1>Roman Numeral Converter</h1>
      <form onSubmit={handleSubmit} className="bg-green-500">
        <label>
          Enter a Roman numeral:
          <input
            className="bg-slate-400"
            type="text"
            value={romanInput}
            onChange={(e) => setRomanInput(e.target.value)}
          />
        </label>
        <button type="submit" className="">
          Convert
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && <p>{result}</p>}
    </div>
  );
};

export default RomanConverter;
