import React, { useState } from "react";

function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter both weight and height");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    let bmiCategory = "";
    if (bmiValue < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      bmiCategory = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obese";
    }
    setCategory(bmiCategory);
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center bg-black p-10">
      <div className="max-w-full w-[700px] my-10 mx-10 p-4">
        <h1 className="text-4xl mb-3">BMI Calculator</h1>
        <p className="text-2xl text-gray-500">
          Body Mass Index (BMI) is a simple measurement used to assess whether a
          person has a healthy body weight for their height. It is calculated by
          dividing weight (kg) by the square of height (m²). BMI categories
          include underweight (below 18.5), normal weight (18.5–24.9),
          overweight (25–29.9), and obese (30 and above). While BMI is a useful
          screening tool, it does not directly measure body fat or account for
          factors like muscle mass and distribution.
        </p>
      </div>
      <div className="p-6 bg-black text-white rounded-lg max-w-md mx-auto border-2">
        <h2 className="text-xl font-bold mb-4">BMI Calculator</h2>
        <div className="mb-2">
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 rounded bg-gray-700"
          />
        </div>
        <div className="mb-2">
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 rounded bg-gray-700"
          />
        </div>
        <button
          onClick={calculateBMI}
          className="w-full p-2 mt-2 bg-blue-500 rounded hover:bg-blue-600"
        >
          Calculate
        </button>
        {bmi && (
          <p className="mt-4 text-lg font-bold">
            Your BMI: {bmi} ({category})
          </p>
        )}
      </div>
    </div>
  );
}

export default Bmi;
