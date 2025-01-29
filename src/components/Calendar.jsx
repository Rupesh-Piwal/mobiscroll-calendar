import React from "react";
import Header from "./Header";

const GridRow = ({ rowIndex }) => (
  <div className="grid grid-cols-[200px_repeat(29,_80px)] min-w-max">
    <div className="border border-green-400 h-[60px] flex items-center justify-center sticky left-0 z-30 bg-green-200">
      Resource {String.fromCharCode(65 + rowIndex)}
    </div>
    {[...Array(29)].map((_, index) => (
      <div
        key={index}
        className="bg-indigo-200 border border-indigo-400 h-[60px]"
      ></div>
    ))}
  </div>
);

const Calendar = ({ numRows = 15 }) => {
  return (
    <div className="relative h-screen flex flex-col">
      {/* Main Header - Always Fixed */}
      <div className="w-full bg-white">
        <Header />
      </div>

      <div className="overflow-auto flex-1">
        <div className="relative">
          <div className="sticky top-0 grid grid-cols-[200px_repeat(29,_80px)] min-w-max bg-white z-40">
            <div className="border border-gray-400 h-[30px] flex items-center justify-center sticky left-0 z-50 bg-white">
              Header
            </div>

            {[...Array(29)].map((_, index) => (
              <div
                key={index}
                className="bg-red-200 border border-red-400 h-[30px] flex items-center justify-center"
              >
                {index + 1}
              </div>
            ))}
          </div>

          {/* Grid Rows */}
          {[...Array(numRows)].map((_, rowIndex) => (
            <GridRow key={rowIndex} rowIndex={rowIndex} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
