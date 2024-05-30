import React from "react";
import AboutUsIMG from "../../../assets/images/about-us.png";
import SkillData from "../../../JSON/Skills.json";

const Skills = () => {
  return (
    <section className="w-full about-myself">
      <div className="w-full flex justify-end">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] text-gray-600 mx-auto border-indigo-600 pb-2">
          SKILL & ABILITIES
        </h2>
      </div>
      <div className="w-full grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {SkillData.map((data) => {
          return (
            <div className="flex flex-col items-center m-5 gap-6 p-6 bg-white shadow-lg rounded-lg transform transition-all duration-300 hover:shadow-2xl">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{data.name}</p>
              </div>
              <div className="flex justify-center">
                <img
                  className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto rounded-lg shadow-md object-cover"
                  src={data.icon}
                  alt={data.name}
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-lg font-medium text-gray-700 mb-2">
                  Abilities percentage:
                  <span className="text-blue-600 ml-1">{data.pr}%</span>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${data.pr}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
