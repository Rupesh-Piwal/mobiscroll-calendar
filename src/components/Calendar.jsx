import React, { useState } from "react";
import { getDaysInMonth, format } from "date-fns";
import Header from "./Header";

const GridRow = React.memo(({ resource, daysInMonth }) => (
  <div
    className="grid min-w-max"
    style={{
      gridTemplateColumns: `200px repeat(${daysInMonth}, 80px)`,
    }}
  >
    <div className="border border-green-400 h-[60px] flex items-center justify-center sticky left-0 z-30 bg-green-200">
      {resource.name}
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
  const [currentDate, setCurrentDate] = useState(new Date());
  const daysInMonth = getDaysInMonth(currentDate);
  const [resources, setResources] = useState([
    { id: 1, name: "Resource A" },
    { id: 2, name: "Resource B" },
    { id: 3, name: "Resource C" },
    { id: 4, name: "Resource D" },
    { id: 5, name: "Resource E" },
    { id: 6, name: "Resource F" },
    { id: 7, name: "Resource G" },
    { id: 8, name: "Resource H" },
    { id: 9, name: "Resource I" },
    { id: 10, name: "Resource J" },
  ]);

  const handleDateChange = (date) => {
    setCurrentDate(date);
  };

  const addResource = () => {
    const newResource = {
      id: resources.length + 1,
      name: `Resource ${String.fromCharCode(65 + resources.length)}`,
    };
    setResources([...resources, newResource]);
  };

  const renderHeaderCells = () => {
    return [...Array(daysInMonth)].map((_, index) => {
      const dayDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        index + 1
      );
      const weekdayName = format(dayDate, "EEE");
      const dayNumber = index + 1;

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

          {resources.map((resource) => (
            <GridRow
              key={resource.id}
              resource={resource}
              daysInMonth={daysInMonth}
            />
          ))}
        </div>
      </div>

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
