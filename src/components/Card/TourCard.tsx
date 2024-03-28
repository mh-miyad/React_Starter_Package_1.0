import { BsCalendar3, BsPeopleFill } from "react-icons/bs";
import img from "../../assets/card-img-png.jpg";
const TourCard = () => {
  return (
    <article className="max-w-xs rounded-xl group">
      <div className="cursor-pointer block max-w-xs max-h-[400px] overflow-hidden rounded-3xl group-hover:ring-1 ring-offset-4 mb-4 ring-orange-500 ">
        <img
          src={img}
          alt="img"
          className="mx-auto group-hover:scale-125  transition-all ease-linear duration-500 "
        />
      </div>
      <div>
        <h2>Lucca Bike Tour</h2>
        <p className="text-gray-500 text-xl">
          From{" "}
          <span className="text-2xl mx-3 font-bold text-[#ff9318]">$34</span>
        </p>
        <div className="flex justify-between items-center mt-4 ">
          <span className="flex items-center gap-2  uppercase text-[#fca311] text-xl font-semibold">
            <BsCalendar3 />
            Every Day
          </span>
          <span className="flex items-center gap-2 uppercase text-[#fca311] text-xl font-semibold ">
            <BsPeopleFill />
            3-10 PP
          </span>
        </div>
        <p className="mt-4 text-base capitalize">
          A tour of the city and its surroundings led by a professional guide
          ...
        </p>
      </div>
    </article>
  );
};

export default TourCard;
