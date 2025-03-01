import React from "react";

function About() {
  return (
    <div className="text-white max-w-4xl mx-auto px-4 items-center min-h-screen my-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
        How It Works
      </h1>

      {/* Section 1: Water Intake */}
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-500">
          1. Calculating Daily Water Intake
        </h2>
        <p className="text-gray-300 mt-2">
          <span className="text-gray-700">
            <strong>Why It Matters:</strong> Staying hydrated is essential for
            metabolism, digestion, temperature regulation, and overall
            well-being.
          </span>
        </p>
        <p className="mt-2 text-gray-700">
          <strong>How It Works:</strong> The recommended daily water intake is
          based on body weight and activity level. A general guideline is{" "}
          <strong>35-40 ml per kg of body weight</strong>. Active individuals or
          those in hot climates may require more water. Our calculator provides
          a personalized daily water intake recommendation.
        </p>
      </div>

      <div className="mb-6 mt-17">
        <h2 className="text-3xl font-semibold text-gray-500">
          2. Calculating Daily Protein Intake
        </h2>
        <p className="text-gray-700 mt-2">
          Why It Matters: Protein is essential for muscle repair, growth, and
          overall body function. It supports immune health, metabolism, and
          helps maintain muscle mass. How It Works: Protein intake is calculated
          based on body weight, activity level, and fitness goals. The
          recommended intake: Sedentary individuals: 0.8g per kg of body weight
          Moderately active individuals: 1.2-1.5g per kg of body weight Highly
          active individuals & athletes: 1.6-2.2g per kg of body weight Our tool
          provides a customized protein intake recommendation to support your
          goals.
        </p>
      </div>

      <div className="mb-6 mt-17">
        <h2 className="text-3xl font-semibold text-gray-500">
          3. Calculating BMI (Body Mass Index)
        </h2>
        <p className="text-gray-700 mt-2">
          Why It Matters: BMI is a simple method to assess if you have a healthy
          weight relative to your height. How It Works: The formula used is: BMI
          = weight (kg) / height² (m²) BMI Categories: Underweight: BMI lesser
          18.5 Normal weight: 18.5 - 24.9 Overweight: 25 - 29.9 Obese: BMI ≥ 30
          Our calculator provides instant BMI results and insights into your
          weight category.
        </p>
      </div>

      <div className="mb-6 mt-17">
        <h2 className="text-3xl font-semibold text-gray-500">
          4. Calculating Daily Calorie Intake
        </h2>
        <p className="text-gray-700 mt-2">
          How It Works: Daily calorie needs are calculated using the Basal
          Metabolic Rate (BMR) and activity level. The Mifflin-St Jeor equation
          is used: For Men: BMR = (10 × weight in kg) + (6.25 × height in cm) –
          (5 × age) + 5 For Women: BMR = (10 × weight in kg) + (6.25 × height in
          cm) – (5 × age) – 161 Total Daily Energy Expenditure (TDEE) is
          determined by multiplying BMR by an activity factor. Our calculator
          provides a daily calorie target based on your weight goals
          (maintenance, gain, or loss).
        </p>
      </div>
    </div>
  );
}

export default About;
