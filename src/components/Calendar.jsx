import React, { useState } from "react";
import { getDaysInMonth, getDay, format } from "date-fns"; // Import necessary functions
import Header from "./Header";

const GridRow = React.memo(({ rowIndex, daysInMonth, startDate }) => (
  <div
    className="grid min-w-max"
    style={{
      gridTemplateColumns: `200px repeat(${daysInMonth}, 80px)`, // Dynamically set columns
    }}
  >
    <div className="border border-green-400 h-[60px] flex items-center justify-center sticky left-0 z-30 bg-green-200">
      Resource {String.fromCharCode(65 + rowIndex)}
    </div>
    {[...Array(daysInMonth)].map((_, index) => (
      <div
        key={index}
        className="bg-indigo-200 border border-indigo-400 h-[60px]"
      ></div>
    ))}
  </div>
));

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Track the current date
  const daysInMonth = getDaysInMonth(currentDate);

  const handleDateChange = (date) => {
    setCurrentDate(date); // Update the current date
  };

  // Get the weekday names and day numbers for the current month
  const renderHeaderCells = () => {
    return [...Array(daysInMonth)].map((_, index) => {
      const dayDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        index + 1
      );
      const weekdayName = format(dayDate, "EEE"); // Get weekday name (e.g., "Mon")
      const dayNumber = index + 1; // Get day number

      return (
        <div
          key={index}
          className="bg-red-200 border border-red-400 h-[30px] flex flex-row gap-2 items-center justify-center"
        >
          <div>{weekdayName}</div> 
          <div>{dayNumber}</div> 
        </div>
      );
    });
  };

  return (
    <div className="relative h-screen flex flex-col">
      <div className="w-full bg-white">
        <Header onDateChange={handleDateChange} />
      </div>

      <div className="overflow-auto flex-1">
        <div className="relative">
        
          <div
            className="sticky top-0 grid min-w-max bg-white z-40"
            style={{
              gridTemplateColumns: `200px repeat(${daysInMonth}, 80px)`, 
            }}
          >
            <div className="border border-gray-400 h-[30px] flex items-center justify-center sticky left-0 z-50 bg-white">
              Header
            </div>
            {renderHeaderCells()} 
          </div>

          {[...Array(15)].map((_, rowIndex) => (
            <GridRow
              key={rowIndex}
              rowIndex={rowIndex}
              daysInMonth={daysInMonth}
              startDate={currentDate} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
