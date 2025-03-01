import React, { useState } from "react";

function CaloriesIntake() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("1.2");
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    if (!age || !weight || !height) {
      alert("Please fill in all fields");
      return;
    }

    let BMR;
    if (gender === "male") {
      BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const TDEE = BMR * parseFloat(activity);
    setCalories(TDEE.toFixed(2));
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center bg-black p-10">
      <div className="max-w-full w-[700px] my-10 mx-10 p-4">
        <h1 className="text-4xl mb-3">Calories Calculator</h1>
        <p className="text-2xl text-gray-500">
          A calorie calculator is a tool that estimates the number of calories a
          person needs to consume daily based on factors like age, gender,
          weight, height, and activity level. It typically uses the Mifflin-St
          Jeor Equation to calculate Basal Metabolic Rate (BMR) and then adjusts
          for physical activity to determine Total Daily Energy Expenditure
          (TDEE). This helps individuals manage their diet, whether they aim to
          lose, gain, or maintain weight by adjusting their calorie intake
          accordingly.
        </p>
      </div>
      <div className="p-6 m-10 mx-7 bg-black text-white rounded-lg max-w-md border-2">
        <h2 className="text-xl font-bold mb-4">
          Daily Calorie Intake Calculator
        </h2>
        <div className="mb-2">
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 rounded bg-gray-700"
          />
        </div>
        <div className="mb-2">
          <label>Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 rounded bg-gray-700"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
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
        <div className="mb-2">
          <label>Activity Level:</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full p-2 rounded bg-gray-700"
          >
            <option value="1.2">Sedentary (little to no exercise)</option>
            <option value="1.375">
              Lightly active (light exercise 1-3 days a week)
            </option>
            <option value="1.55">
              Moderately active (moderate exercise 3-5 days a week)
            </option>
            <option value="1.725">
              Very active (hard exercise 6-7 days a week)
            </option>
            <option value="1.9">
              Super active (very intense exercise or physical job)
            </option>
          </select>
        </div>
        <button
          onClick={calculateCalories}
          className="w-full p-2 mt-2 bg-blue-500 rounded hover:bg-blue-600"
        >
          Calculate
        </button>
        {calories && (
          <p className="mt-4 text-lg font-bold">
            Estimated Daily Calories: {calories} kcal
          </p>
        )}
      </div>
      <div className="max-w-full w-[700px] my-10 mx-10 p-4">
        <h1 className="text-3xl mb-3">How Many Calories Do You Need? </h1>
        <p className="text-2xl text-gray-500">
          The number of calories you need depends on your age, gender, weight,
          height, and activity level. Your body burns calories for basic
          functions like breathing and digestion (Basal Metabolic Rate or BMR).
          When you factor in physical activity, you get your Total Daily Energy
          Expenditure (TDEE). On average, men need around 2,500 kcal per day,
          while women need about 2,000 kcal, but this varies based on lifestyle
          and fitness goals. To maintain weight, consume calories equal to your
          TDEE; to lose or gain weight, adjust your intake accordingly.
        </p>
      </div>
    </div>
  );
}

export default CaloriesIntake;
