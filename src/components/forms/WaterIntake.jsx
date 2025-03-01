import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WaterIntake = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("low");
  const [waterIntake, setWaterIntake] = useState(null);

  // Calculate Water Intake in Liters
  const calculateWaterIntake = (e) => {
    e.preventDefault();

    if (!weight) {
      alert("Please enter your weight!");
      return;
    }

    let factor;
    switch (activityLevel) {
      case "low":
        factor = 35;
        break;
      case "moderate":
        factor = 40;
        break;
      case "high":
        factor = 45;
        break;
      default:
        factor = 35;
    }

    const intakeInML = weight * factor; // Intake in ml
    const intakeInLiters = (intakeInML / 1000).toFixed(2); // Convert to Liters

    setWaterIntake(intakeInLiters);
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center bg-black p-10">
      <div className="max-w-full w-[700px] my-10 mx-10 p-4">
        <h1 className="text-4xl mb-3">Water Calculator</h1>
        <p className="text-2xl text-gray-500">
          A Water Intake Calculator helps determine the ideal amount of water
          you should drink daily based on your weight and activity level. It
          uses a formula where water intake is calculated as 35-45ml per kg of
          body weight, adjusting for low, moderate, or high activity levels. The
          result is displayed in liters per day, helping users stay hydrated for
          better metabolism, digestion, and overall health.
        </p>
      </div>
      <div className="w-full max-w-lg bg-black p-6 rounded-lg border-2 border-white shadow-lg">
        <h2 className="text-3xl py-3 text-center font-bold text-blue-400">
          Water Intake Calculator 💧
        </h2>

        <form onSubmit={calculateWaterIntake} className="space-y-4">
          {/* Weight Input */}
          <div>
            <label className="text-xl">Weight (kg)</label>
            <input
              type="number"
              placeholder="Enter Your Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 mt-2 border-2 border-white rounded-lg bg-gray-700 text-white"
            />
          </div>

          {/* Activity Level Selection */}
          <div>
            <label className="text-xl">Activity Level</label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full p-3 mt-2 border-2 border-white rounded-lg bg-gray-700 text-white"
            >
              <option value="low">Low (Sedentary - 35ml/kg)</option>
              <option value="moderate">Moderate (Active - 40ml/kg)</option>
              <option value="high">High (Athlete - 45ml/kg)</option>
            </select>
          </div>

          {/* Calculate Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
          >
            Calculate Water Intake
          </button>
        </form>

        {/* Result Display */}
        {waterIntake && (
          <div className="mt-4 text-center text-lg">
            <p>Your recommended daily water intake is:</p>
            <p className="text-2xl font-bold text-blue-400">
              {waterIntake} L/day
            </p>
          </div>
        )}
      </div>

      <div className="max-w-full w-[700px] my-10 mx-10 p-4">
        <h1 className="text-4xl mb-3">Factors Affecting Water Needs</h1>
        <p className=" text-gray-500">
          <span>
            <span className="text-white">
          Body Weight & Age:</span> Heavier individuals and younger people often
          need more water.</span>
          <br />
          <span>
            Activity Level: More exercise = more sweating =
          higher water intake required. </span><br />
           <span>
           Climate & Weather: Hot, humid
          conditions increase water loss through sweat.</span><br />

          <span>
            Diet & Salt Intake:
          High-protein, salty, or spicy foods require more water for digestion.</span><br />

          <span>
           Health Conditions: Fever, kidney issues, or pregnancy can affect
          hydration needs. </span> <br />

          <span>
          Caffeine & Alcohol Consumption: These can cause
          dehydration, increasing water requirements.</span>
        </p>
      </div>
    </div>
  );
};

export default WaterIntake;
