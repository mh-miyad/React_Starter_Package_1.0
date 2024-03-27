import "../../style/Custom.css";
import BookingTool from "../BookingTool/BookingTool";

const Header = () => {
  return (
    <div className={`pt-36 header-img`}>
      <header className="">
        <h1 className="text-center mt-24  md:mt-32 font-dancing text-6xl md:text-7xl lg:text-8xl   tracking-wider leading-normal text-white font-medium px-5">
          Enjoy In the best way{" "}
        </h1>
        <h3 className="text-center mt-4  text-2xl tracking-wider leading-normal text-white font-semibold px-5">
          Enjoy our services for your trip anytime
        </h3>
      </header>
      <BookingTool />
    </div>
  );
};

export default Header;
