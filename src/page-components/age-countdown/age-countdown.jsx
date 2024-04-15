"use client";
import { useState } from "react";

export default function AgeCountdown() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [countdown, setCountdown] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const birthday = new Date(`${year}-${month}-${day}`);
    const now = new Date();
    const distance = birthday - now;

    if (isNaN(birthday.getTime()) || distance < 0) {
      alert("Please enter a valid future date.");
      return;
    }

    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = birthday - now;

      const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor(
        (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(
        `${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
      );

      if (distance < 0) {
        clearInterval(countdownInterval);
        setCountdown("Happy Birthday!");
      }
    }, 1000);
  };

  return (
    <div className="container">
      <h1>Birthday Countdown</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          required
        />
        <button type="submit">Start Countdown</button>
      </form>
      <div id="countdown">{countdown}</div>

      <style jsx>{`
        .container {
          text-align: center;
          margin-top: 50px;
        }
        input {
          padding: 10px;
          margin: 5px;
          width: 60px;
          text-align: center;
          width: 100px;
        }
        button {
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          border: none;
          cursor: pointer;
        }
        #countdown {
          margin-top: 20px;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}
