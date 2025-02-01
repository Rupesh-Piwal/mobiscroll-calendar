import React, { useState, useEffect } from "react";
import { getDaysInMonth, format, isToday } from "date-fns"; // Import isToday
import Header from "./Header";

const GridRow = React.memo(
  ({ resource, daysInMonth, onSelectCells, selectedCells }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startCell, setStartCell] = useState(null);
    const [endCell, setEndCell] = useState(null);

    const handleMouseDown = (index) => {
      setIsDragging(true);
      setStartCell(index);
      setEndCell(index);
    };

    const handleMouseMove = (index) => {
      if (isDragging) {
        setEndCell(index);
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        onSelectCells(resource.id, startCell, endCell);
      }
    };

    return (
      <div
        className="grid min-w-max"
        style={{
          gridTemplateColumns: `200px repeat(${daysInMonth}, 80px)`,
        }}
      >
        <div className="border border-green-400 h-[60px] flex items-center justify-center sticky left-0 z-30 bg-green-200">
          {resource.name}
        </div>
        {[...Array(daysInMonth)].map((_, index) => {
          const isSelected =
            selectedCells &&
            selectedCells.resourceId === resource.id &&
            index >= Math.min(startCell, endCell) &&
            index <= Math.max(startCell, endCell);

          return (
            <div
              key={index}
              className={`border border-indigo-400 h-[60px] ${
                isSelected ? "bg-blue-300" : "bg-indigo-200"
              }`}
              onMouseDown={() => handleMouseDown(index)}
              onMouseMove={() => handleMouseMove(index)}
              onMouseUp={handleMouseUp}
            ></div>
          );
        })}
      </div>
    );
  }
);

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const daysInMonth = getDaysInMonth(currentDate);
  const [resources, setResources] = useState(() => {
    const savedResources = localStorage.getItem("resources");
    return savedResources
      ? JSON.parse(savedResources)
      : [{ id: 1, name: "Resource A" }];
  });
  const [selectedCells, setSelectedCells] = useState(null);

  useEffect(() => {
    localStorage.setItem("resources", JSON.stringify(resources));
  }, [resources]);

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

  const handleSelectCells = (resourceId, startCell, endCell) => {
    setSelectedCells({ resourceId, startCell, endCell });
    const startDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      startCell + 1
    );
    const endDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      endCell + 1
    );
    const eventName = prompt("Enter event name:");
    if (eventName) {
      const newEvent = {
        id: Date.now(),
        resourceId,
        name: eventName,
        startDate,
        endDate,
      };
      // Save the event (you can store it in state or localStorage)
      console.log("New Event:", newEvent);
    }
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
              gridTemplateColumns: `200px repeat(${daysInMonth}, 80px)`,
            }}
          >
            <div className="border border-gray-400 h-[30px] flex items-center justify-center sticky left-0 z-50 bg-white">
              Header
            </div>
            {renderHeaderCells()}
          </div>

          {/* Grid Rows */}
          {resources.map((resource) => (
            <GridRow
              key={resource.id}
              resource={resource}
              daysInMonth={daysInMonth}
              onSelectCells={handleSelectCells}
              selectedCells={selectedCells}
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
