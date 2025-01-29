import { ArrowLeft, ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 bg-gray-100 border-b">
      <h2 className="text-[22px] font-medium">October 2023</h2>
      <div className="flex items-center space-x-2">
        <ArrowLeft className=" text-blue-500 rounded hover:text-blue-800 cursor-pointer" />
        <button className="px-4 py-2 font-medium text-[18px] text-blue-500 rounded hover:text-blue-800 cursor-pointer">
          Next
        </button>
        <ArrowRight className=" text-blue-500 rounded hover:text-blue-800 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
