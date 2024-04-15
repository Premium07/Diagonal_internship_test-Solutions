// pages/index.js
"use client";
import { useState, useEffect } from "react";

export default function AgeCalc() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (year && month && day) {
        calculateAge();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [year, month, day]);

  const calculateAge = () => {
    const birthday = new Date(year, month - 1, day);
    const now = new Date();
    const diff = now - birthday;
    const ageDate = new Date(diff);
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    const hours = ageDate.getUTCHours();
    const minutes = ageDate.getUTCMinutes();
    const seconds = ageDate.getUTCSeconds();

    setAge(
      `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (year && month && day) {
      calculateAge();
    }
  };

  return (
    <div>
      <h1 className="mb-2">Age Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Year:
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            min="1900"
            max="2100"
            required
          />
        </label>
        <label>
          Month:
          <input
            type="number"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            min="1"
            max="12"
            required
          />
        </label>
        <label>
          Day:
          <input
            type="number"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            min="1"
            max="31"
            required
          />
        </label>
        <button type="submit">Calculate Age</button>
      </form>
      {age && <p>{age}</p>}
    </div>
  );
}
