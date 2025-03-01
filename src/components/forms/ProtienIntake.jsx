import React, { useState } from "react";

function ProteinIntake() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [proteinIntake, setProteinIntake] = useState(null);

  // Function to calculate protein intake
  const calculateProtein = (e) => {
    e.preventDefault();

    if (!weight || !activityLevel) {
      alert("Please enter all fields");
      return;
    }

    let proteinFactor;
    switch (activityLevel) {
      case "sedentary":
        proteinFactor = 0.8;
        break;
      case "moderate":
        proteinFactor = 1.2;
        break;
      case "active":
        proteinFactor = 1.6;
        break;
      default:
        proteinFactor = 0.8;
    }

    const intake = (weight * proteinFactor).toFixed(2);
    setProteinIntake(intake);
  };

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center bg-black p-10">
      <div className="max-w-full w-[700px] my-10 mx-10 p-4">
        <h1 className="text-4xl mb-3">Protien Calculator</h1>
        <p className="text-2xl text-gray-500">
          The Protein Calculator estimates the daily amount of dietary protein
          adults require to remain healthy. Children, those who are highly
          physically active, and pregnant and nursing women typically require
          more protein. The calculator is also useful for monitoring protein
          intake for those with kidney disease, liver disease, diabetes, or
          other conditions in which protein intake is a factor.
        </p>
      </div>
      <div className="w-full max-w-lg bg-black rounded-lg border-2 border-white shadow-lg p-7">
        <h1 className="text-3xl py-3 text-center font-bold text-pink-500">
          Protein Intake Calculator
        </h1>

        <form onSubmit={calculateProtein} className="space-y-4">
          {/* Age Input */}
          <div>
            <label className="text-xl">Age</label>
            <input
              type="number"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 mt-2 border-2 border-white rounded-lg bg-gray-700 text-white"
            />
          </div>

          {/* Gender Selection */}
          <div>
            <label className="text-xl">Gender</label>
            <div className="flex items-center gap-4 mt-2">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={() => setGender("male")}
                  className="accent-pink-500"
                />
                Male
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={() => setGender("female")}
                  className="accent-pink-500"
                />
                Female
              </label>
            </div>
          </div>

          {/* Weight Input */}
          <div>
            <label className="text-xl">Weight (kg)</label>
            <input
              type="number"
              placeholder="Enter Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 mt-2 border-2 border-white rounded-lg bg-gray-700 text-white"
            />
          </div>

          {/* Activity Level Dropdown */}
          <div>
            <label className="text-xl">Activity Level</label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full p-3 mt-2 border-2 border-white rounded-lg bg-gray-700 text-white"
            >
              <option value="sedentary">Sedentary (0.8g/kg)</option>
              <option value="moderate">Moderate (1.2g/kg)</option>
              <option value="active">Active (1.6g/kg)</option>
            </select>
          </div>

          {/* Calculate Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 rounded-lg transition"
          >
            Calculate Protein Intake
          </button>
        </form>

        {/* Result Display */}
        {proteinIntake && (
          <div className="mt-4 text-center text-lg">
            <p>Your recommended daily protein intake is:</p>
            <p className="text-2xl font-bold text-pink-400">
              {proteinIntake} g/day
            </p>
          </div>
        )}
      </div>

      <div className="max-w-full w-[900px] my-10 mx-10 p-4">
        <h1 className="text-4xl mb-3">What are Proteins</h1>
        <p className="text-2xl text-gray-500">
          Proteins are one of three primary macronutrients that provide energy
          to the human body, along with fats and carbohydrates. Proteins are
          also responsible for a large portion of the work that is done in
          cells; they are necessary for proper structure and function of tissues
          and organs, and also act to regulate them. They are comprised of a
          number of amino acids that are essential to proper body function, and
          serve as the building blocks of body tissue. There are 20 different
          amino acids in total, and the sequence of amino acids determines a
          protein's structure and function.
        </p>
      </div>

      <div className="max-w-full w-[900px] my-10 mx-10 p-4">
        <h1 className="text-4xl mb-3">Protien Sources</h1>
        <p className="text-2xl text-gray-500">
          Protein sources can be divided into animal-based and plant-based
          options. Animal-based sources include chicken, fish, eggs, dairy, and
          lean meats, which provide complete proteins with all essential amino
          acids. Plant-based sources like lentils, beans, tofu, quinoa, nuts,
          and seeds are great for vegetarians and vegans, though some may lack
          certain amino acids and require a combination of foods for a balanced
          protein intake. Both types of protein support muscle growth, tissue
          repair, and overall health. Choosing a variety of protein-rich foods
          ensures proper nutrition and optimal body function.
        </p>
      </div>

      <div className="max-w-full w-[900px] my-10 mx-10 p-4">
        <h1 className="text-4xl mb-3">Risks of Too Little or Too Much Protein</h1>
        <p className="text-2xl text-gray-500">
          <span>
        Effects of protein deficiency (muscle loss, fatigue, weak immunity).</span><br />
        Side effects of excessive protein intake (kidney strain, digestive issues).
        </p>
      </div>
    </div>
  );
}

export default ProteinIntake;
