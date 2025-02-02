import React, { useState, useEffect } from "react";
import { getDaysInMonth, format, isToday } from "date-fns"; // Import isToday
import Header from "./Header";

const GridRow = React.memo(({ resource, daysInMonth }) => (
  <div
    className="grid min-w-max"
    style={{
      gridTemplateColumns: `200px repeat(${daysInMonth}, 80px)`, // Dynamically set columns
    }}
  >
    <div className="border border-green-400 h-[60px] flex items-center justify-center sticky left-0 z-30 bg-green-200">
      {resource.name} {/* Display resource name */}
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

  // Load resources from localStorage or initialize with default value
  const [resources, setResources] = useState(() => {
    const savedResources = localStorage.getItem("resources");
    return savedResources
      ? JSON.parse(savedResources)
      : [{ id: 1, name: "Resource A" }]; // Default resource
  });

  // Save resources to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("resources", JSON.stringify(resources));
  }, [resources]);

  const handleDateChange = (date) => {
    setCurrentDate(date); // Update the current date
  };

  // Add a new resource
  const addResource = () => {
    const newResource = {
      id: resources.length + 1, // Generate a unique ID
      name: `Resource ${String.fromCharCode(65 + resources.length)}`, // Generate a name (A, B, C, ...)
    };
    setResources([...resources, newResource]); // Add the new resource to the list
  };

  // RENDER HEADER cells with weekday names and day numbers
  const renderHeaderCells = () => {
    return [...Array(daysInMonth)].map((_, index) => {
      const dayDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        index + 1
      );
      const weekdayName = format(dayDate, "EEE");
      const dayNumber = index + 1;
      const isCurrentDate = isToday(dayDate);

      return (
        <div
          key={index}
          className={`border border-red-400 h-[30px] flex flex-row gap-2 items-center justify-center ${
            isCurrentDate ? "bg-yellow-200" : "bg-red-200"
          }`}
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
          {/* Header Row */}
          <div
            className="sticky top-0 grid min-w-max bg-white z-40"
            style={{
              gridTemplateColumns: `200px repeat(${daysInMonth}, 80px)`, // Dynamically set columns
            }}
          >
            <div className="border border-gray-400 h-[30px] flex items-center justify-center sticky left-0 z-50 bg-white">
              Header
            </div>
            {renderHeaderCells()} {/* Render weekday names and day numbers */}
          </div>

          {/* Grid Rows */}
          {resources.map((resource) => (
            <GridRow
              key={resource.id} // Use resource ID as the key
              resource={resource}
              daysInMonth={daysInMonth}
            />
          ))}
        </div>
      </div>

      {/* Button to add a new resource */}
      <div className="p-4 bg-white border-t border-gray-200">
        <button
          onClick={addResource}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Resource
        </button>
      </div>
    </div>
  );
};

export default Calendar;
