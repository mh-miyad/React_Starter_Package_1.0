import { useState } from "react";
import { FaEarthAmericas, FaPeopleGroup } from "react-icons/fa6";

const BookingTool = () => {
  const [activeTab, setActiveTab] = useState("public"); // Initial active tab

  const handleClickPublic = () => {
    setActiveTab("public");
  };

  const handleClickPrivate = () => {
    setActiveTab("private");
  };

  return (
    <div className="flex py-4 bg-white/20 my-10 border max-w-7xl w-full mx-auto px-5 backdrop-blur-sm rounded-lg shadow-2xl shadow-white/20">
      {/* Tab Buttons */}
      <div className="flex items-center">
        <button
          className={`flex items-center gap-2 ${
            activeTab === "public"
              ? "text-[#fca311] bg-white"
              : "bg-transparent text-white"
          } px-10 py-3 rounded-l-xl border-r-0 border-white/50 border text-lg font-semibold drop-shadow-xl`}
          onClick={handleClickPublic}>
          <FaEarthAmericas size={20} />
          Public Tours
        </button>
        <button
          className={`flex items-center gap-2 ${
            activeTab === "private"
              ? "text-[#fca311] bg-white"
              : "bg-transparent text-white"
          } px-10 py-3 rounded-r-xl border-l-0 border-white/50 border text-lg font-semibold drop-shadow-xl`}
          onClick={handleClickPrivate}>
          <FaPeopleGroup size={20} />
          Private Tours
        </button>
      </div>
      {/* Tab Content (Add your content based on activeTab) */}
    </div>
  );
};

export default BookingTool;
