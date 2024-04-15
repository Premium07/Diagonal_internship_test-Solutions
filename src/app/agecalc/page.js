import React from "react";
import AgeCalc from "@/page-components/age-calculator/age-app";

const AgeCalculator = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-slate-700">
      {" "}
      <AgeCalc />
    </div>
  );
};

export default AgeCalculator;
