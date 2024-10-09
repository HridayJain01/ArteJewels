import React from "react";
import Giftcard from "./reusables/Giftcard";

export default function Gift() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-cards-pattern">
      <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-8xl font-bold font-sans mb-2">Make a Customised Gift Card</h2>
          <p className="flex flex-wrap text-2xl p-10 font-sans">
            Wish this Diwali to your loved ones with our finest products ranging from an affodable rate to an luxourious finish whatever suits the requirements
            </p>
        </div>
      </div>

      <div className="w-full md:w-1/2  ">
        <div className="text-center">
          <Giftcard />
        </div>
      </div>
    </div>
  );
}