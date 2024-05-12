// src/components/Home.js

import React from "react";
import { Avatar } from "@chakra-ui/react";

const Banner = () => {
  return (
    <>
      <div className="w-full min-h-96 items-center flex ">
        <div className="w-full flex justify-between mr-5 px-60">
          {" "}
          <div className=" items-center min-h-full  ">
            <h1 className="text-gray font-200 order-1 text-7xl">Hello</h1>
            <div className="flex gap-2">
              <p className="text-gray font-200 order-1 text-4xl">I AM </p>
              <span className="text-gray font-200 order-1 text-4xl  font-bold">
                Kalpesh Chauhan
              </span>
            </div>
          </div>
          <div className="items-center min-h-full   ">
            <h1 className="w-96 text-gray font-200  ">
              <img src="https://flowbite.com/docs/images/logo.svg" alt="img" />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
