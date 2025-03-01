import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
// import protein from "../img/"
function Home() {

  const navigate = useNavigate();

  return (
    <div className="text-white flex flex-col justify-center items-center min-h-screen mt-12 mb-6 px-4">
      <div id="div2" className="w-full max-w-4xl min-h-[500px] flex-grow">
        <div className="h-auto sm:h-[350px] transition-all duration-500 ease-in-out hover:scale-105 flex flex-col sm:flex-row mb-5 border border-white rounded-2xl hover:border-pink-500 p-5">
          <div className="w-full sm:w-1/2 text-white py-5 px-5">
            <h1 className="text-xl font-bold font-sans px-5 py-5">
              Calculate Your Protein Intake
            </h1>
            <span className="text-gray-500">
              Calculating daily protein intake is essential for maintaining
              overall health, muscle growth, metabolism, and immunity. Whether
              your goal is weight loss, muscle building, or general well-being,
              ensuring the right protein intake will improve your performance
              and quality of life.
            </span>
          </div>
          <div className="w-full sm:w-1/2 px-3 py-3 flex flex-col justify-center items-center">
            <img
              src="https://i.pinimg.com/736x/a3/b6/ea/a3b6eae7425652a4838dad6c21fa5513.jpg"
              alt=""
              className="h-60 w-full rounded-2xl object-cover"
            />
            <button className="my-6 bg-blue-400 text-white h-10 
            w-11/12 sm:w-3/4 rounded-2xl hover:cursor-pointer hover:bg-blue-500
            "  onClick={()=>navigate('protien')}>
              Calculate Daily Protein Intake
            </button>
          </div>
        </div>
      </div>


      <div id="div3" className="w-full max-w-4xl min-h-[500px] flex-grow">
        <div className="h-auto sm:h-[350px] transition-all duration-500 ease-in-out hover:scale-105 flex flex-col sm:flex-row mb-5 border border-white rounded-2xl hover:border-pink-500 p-5">
          <div className="w-full sm:w-1/2 text-white py-5 px-5">
            <h1 className="text-xl font-bold font-sans px-5 py-5">
              Calculate Your Water Intake
            </h1>
            <span className="text-gray-500">
            Calculating daily water intake is essential for 
            maintaining hydration, supporting metabolism, regulating
             body temperature, and enhancing overall health. Water plays a
              key role in digestion, detoxification, brain function, and physical 
              performance. Proper hydration prevents fatigue, headaches, and skin dryness 
              while aiding in weight management.
            </span>
          </div>
          <div className="w-full sm:w-1/2 px-3 py-3 flex flex-col justify-center items-center">
            <img
              src="https://i.pinimg.com/736x/2d/89/41/2d89413d652c7c83fd2012192e8e90eb.jpg"
              alt=""
              className="h-60 w-full rounded-2xl object-cover"
            />
            <button className="my-6 bg-blue-400 text-white 
            h-10 w-11/12 sm:w-3/4 rounded-2xl hover:cursor-pointer hover:bg-blue-500"
            onClick={()=>navigate("water")}>
              Calculate Daily Water Intake
            </button>
          </div>
        </div>
      </div>


      <div id="div4" className="w-full max-w-4xl min-h-[500px] flex-grow">
        <div className="h-auto sm:h-[350px] transition-all duration-500 ease-in-out hover:scale-105 flex flex-col sm:flex-row mb-5 border border-white rounded-2xl hover:border-pink-500 p-5">
          <div className="w-full sm:w-1/2 text-white py-5 px-5">
            <h1 className="text-xl font-bold font-sans px-5 py-5">
              Calculate Your Calories Intake
            </h1>
            <span className="text-gray-500">
            Proper calorie tracking supports muscle growth, enhances physical 
            performance, and provides sustained energy levels. Individual needs 
            vary based on age, activity level, and health goals, making personalized 
            calorie intake essential for overall well-being and a healthy lifestyle.
            </span>
          </div>
          <div className="w-full sm:w-1/2 px-3 py-3 flex flex-col justify-center items-center">
            <img
              src="https://i.pinimg.com/736x/ac/5d/a4/ac5da4ccba305247da06336a02d2acf4.jpg"
              alt=""
              className="h-60 w-full rounded-2xl object-cover"
            />
            <button className="my-6 bg-blue-400 text-white h-10 w-11/12 sm:w-3/4 rounded-2xl
            hover:cursor-pointer hover:bg-blue-500" onClick={() => navigate("calories")}>
              Calculate Daily Calories Intake
            </button>
          </div>
        </div>
      </div>



      <div id="div5" className="w-full max-w-4xl min-h-[500px] flex-grow">
        <div className="h-auto sm:h-[350px] transition-all duration-500 ease-in-out hover:scale-105 flex flex-col sm:flex-row mb-5 border border-white rounded-2xl hover:border-pink-500 p-5">
          <div className="w-full sm:w-1/2 text-white py-5 px-5">
            <h1 className="text-xl font-bold font-sans px-5 py-5">
              Calculate Your BMI
            </h1>
            <span className="text-gray-500">
            Calculating Body Mass Index (BMI) is important for assessing whether 
            an individual has a healthy weight in relation to their height. It helps 
            identify risks associated with being underweight, overweight, or obese, which can
             lead to health issues like heart disease, diabetes, and hypertension. While BMI is a 
             useful screening tool, it should be considered alongside other health factors for a complete 
             assessment of overall well-being.
            </span>
          </div>
          <div className="w-full sm:w-1/2 px-3 py-3 flex flex-col justify-center items-center">
            <img
              src="https://i.pinimg.com/736x/e5/28/75/e5287517f57e93f9a36b0ccb6fe00f7d.jpg"
              alt=""
              className="h-60 w-full rounded-2xl object-cover"
            />
            <button className="my-6 bg-blue-400 text-white h-10 w-11/12 sm:w-3/4 rounded-2xl 
            hover:cursor-pointer hover:bg-blue-500"
            onClick={() => navigate("bmi")}>
              Calculate BMI
            </button>
          </div>
        </div>
      </div>

      <Outlet/>
    </div>
  );
}

export default Home;
