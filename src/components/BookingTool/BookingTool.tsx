import { useState } from "react";
import { FaCar, FaEarthAmericas, FaPeopleGroup } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaSearch } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { Datepicker } from "flowbite-react";
import { GiCornerFlag } from "react-icons/gi";
import { Input } from "../ui/input";

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
      <div className="py-2 px-2  md:py-4 bg-white/20 mt-5 border max-w-7xl w-full mx-auto md:px-5 backdrop-blur-sm rounded-lg shadow-2xl shadow-white/20">
        <div className="">
          {/* Tab Buttons */}
          <div className="flex items-center">
            <button
              className={`flex items-center gap-2 ${
                activeTab === "public"
                  ? "text-[#fca311] bg-white"
                  : "bg-white/15 text-white"
              } px-10 py-3 rounded-t-sm border-r-0 border-white/50 border text-xs md:text-sm lg:text-lg font-semibold `}
              onClick={handleClickPublic}>
              <FaEarthAmericas size={20} />
              Public Tours
            </button>
            <button
              className={`flex items-center gap-2 ${
                activeTab === "private"
                  ? "text-[#fca311] bg-white"
                  : "bg-white/15 text-white"
              } px-10 py-3 rounded-t-sm border-l-0  border-white/50 border text-xs md:text-sm lg:text-lg font-semibold `}
              onClick={handleClickPrivate}>
              <FaPeopleGroup size={20} />
              Private Tours
            </button>
          </div>
        </div>
        {activeTab === "public" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 items-center justify-items-center bg-white px-3 py-5">
            <div className=" ml-5 ">
              <label
                htmlFor="numberOfPeople"
                className="flex items-center gap-2  mb-2 text-sm ">
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
            <div className="ml-4 ">
              <label
                htmlFor="numberOfPeople"
                className="flex items-center gap-2 text-sm  mb-2 ">
                <BsCalendarDate />
                Date
              </label>
              <div className="w-full ">
                <Datepicker
                  placeholder="Choose Date"
                  className="bg-transparent border-none"
                />
              </div>
            </div>
            {/* Time */}
            <div className="">
              <label
                htmlFor="numberOfPeople"
                className="flex items-center gap-2 text-sm  mb-2 ">
                <IoMdTime />
                Time
              </label>
              <div className="max-w-[200px]">
                <Input type="time" />
              </div>
            </div>
            {/* Tour */}
            <div className="mr-5">
              <label
                htmlFor="numberOfPeople"
                className="flex items-center gap-2  mb-2 text-sm ">
                <GiCornerFlag size={20} />
                Tour
              </label>

              <Select>
                <SelectTrigger className="md:w-[200px] border-none focus:border-none focus-within:outline-none focus-within:right-0 bg-transparent p-4 ">
                  <SelectValue placeholder="Choose Place" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cox-bazar">Cox's Bazar</SelectItem>
                  <SelectItem value="cox-bazar">Cox's Bazar</SelectItem>
                  <SelectItem value="cox-bazar">Cox's Bazar</SelectItem>
                  <SelectItem value="cox-bazar">Cox's Bazar</SelectItem>
                  <SelectItem value="cox-bazar">Cox's Bazar</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Transportation*/}
            <div className="ml-8">
              <label
                htmlFor="numberOfPeople"
                className="flex items-center gap-2  mb-2 text-sm ">
                <FaCar size={20} />
                Transportation
              </label>

              <Select>
                <SelectTrigger className="md:w-[190px] border-none focus:border-none focus-within:outline-none focus-within:right-0 bg-transparent p-4 ">
                  <SelectValue placeholder="Choose Transportation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cox-bazar">Cox's Bazar</SelectItem>
                  <SelectItem value="cox-bazar">Cox's Bazar</SelectItem>
                  <SelectItem value="cox-bazar">Cox's Bazar</SelectItem>
                  <SelectItem value="cox-bazar">Cox's Bazar</SelectItem>
                  <SelectItem value="cox-bazar">Cox's Bazar</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <button className="bg-[#fca311] text-sm text-white  md:px-6 rounded-lg p-4 md:py-4 flex items-center gap-2 hover:bg-blue-900 shadow-sm hover:shadow-md ">
                <FaSearch size={20} />
              </button>
            </div>
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
