import React from "react";
import Header from "./Header";

const Calendar = ({ numRows = 9 }) => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-[200px_repeat(29,_80px)]">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[30px]"
          ></div>
        ))}
      </div>

      <div className="grid grid-cols-[200px_repeat(29,_80px)] ">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[60px]"
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-[200px_repeat(29,_80px)] ">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[60px]"
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-[200px_repeat(29,_80px)] ">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[60px]"
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-[200px_repeat(29,_80px)] ">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[60px]"
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-[200px_repeat(29,_80px)] ">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[60px]"
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-[200px_repeat(29,_80px)] ">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[60px]"
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-[200px_repeat(29,_80px)] ">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[60px]"
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-[200px_repeat(29,_80px)] ">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[60px]"
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-[200px_repeat(29,_80px)] ">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[60px]"
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-[200px_repeat(29,_80px)] ">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[60px]"
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-[200px_repeat(29,_80px)] ">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[60px]"
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-[200px_repeat(29,_80px)] ">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[60px]"
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-[200px_repeat(29,_80px)] ">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[60px]"
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-[200px_repeat(29,_80px)] ">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[60px]"
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-[200px_repeat(29,_80px)] ">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[60px]"
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-[200px_repeat(29,_80px)] ">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[60px]"
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-[200px_repeat(29,_80px)] ">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-400 h-[60px]"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
