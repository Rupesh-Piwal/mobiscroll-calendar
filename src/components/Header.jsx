import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center  px-4 py-2 bg-slate-200">
      <h2 className="text-xl font-bold">Wednesday 29</h2>
      <div className="flex flex-row items-center gap-2">
        <ChevronLeft
          className="text-blue-500 hover:text-blue-800 cursor-pointer"
          size={22}
        />
        <button className="text-[16px] text-blue-500 hover:text-blue-800 cursor-pointer">
          Today
        </button>
        <ChevronRight
          className="text-blue-500 hover:text-blue-800 cursor-pointer"
          size={22}
        />
      </div>
    </div>
  );
};

export default Header;
