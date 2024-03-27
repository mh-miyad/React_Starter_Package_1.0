import { useState } from "react";
import { FaEarthAmericas, FaPeopleGroup } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Datepicker } from "flowbite-react";

const BookingTool = () => {
  const [activeTab, setActiveTab] = useState("public"); // Initial active tab

  const handleClickPublic = () => {
    setActiveTab("public");
  };

  const handleClickPrivate = () => {
    setActiveTab("private");
  };

  return (
    <>
      <div className="py-4 bg-white/20 mt-5 border max-w-7xl w-full mx-auto px-5 backdrop-blur-sm rounded-lg shadow-2xl shadow-white/20">
        <div className="">
          {/* Tab Buttons */}
          <div className="flex items-center">
            <button
              className={`flex items-center gap-2 ${
                activeTab === "public"
                  ? "text-[#fca311] bg-white"
                  : "bg-white/15 text-white"
              } px-10 py-3 rounded-t-sm border-r-0 border-white/50 border text-lg font-semibold `}
              onClick={handleClickPublic}>
              <FaEarthAmericas size={20} />
              Public Tours
            </button>
            <button
              className={`flex items-center gap-2 ${
                activeTab === "private"
                  ? "text-[#fca311] bg-white"
                  : "bg-white/15 text-white"
              } px-10 py-3 rounded-t-sm border-l-0  border-white/50 border text-lg font-semibold `}
              onClick={handleClickPrivate}>
              <FaPeopleGroup size={20} />
              Private Tours
            </button>
          </div>
        </div>
        {activeTab === "public" ? (
          <div className="flex items-center gap-10 bg-white p-10">
            <div className="">
              <label
                htmlFor="numberOfPeople"
                className="flex items-center gap-2  mb-2 text-xl ">
                <FaPeopleGroup size={20} />
                Number of People
              </label>

              <Select>
                <SelectTrigger className="w-[180px] border-none focus:border-none focus-within:outline-none focus-within:right-0 bg-transparent p-4 ">
                  <SelectValue placeholder="Choose  number" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* date part  */}
            <div className="">
              <label
                htmlFor="numberOfPeople"
                className="flex items-center gap-2 text-xl  mb-2 ">
                <BsCalendarDate />
                Date
              </label>
              <div className="max-w-[200px]">
                <Datepicker
                  placeholder="Choose Date"
                  className="bg-transparent border-none"
                />
              </div>
            </div>
            {/* Time */}
          </div>
        ) : (
          <>
            <p className="bg-white text-black p-20 ">
              Lorem ipsum dolor sit. <br /> Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Magni qui perferendis eos animi
              expedita saepe, ullam ducimus illo quidem. Reiciendis quis odio
              rerum neque accusamus ut maxime non, commodi quidem!
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default BookingTool;
