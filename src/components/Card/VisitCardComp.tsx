import TourCard from "./TourCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../style/Custom.css";
// import required modules
import { Autoplay } from "swiper/modules";

const VisitCardComp = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center ">
        Explore Our Popular Destinations{" "}
      </h2>

      <div className="my-10">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper">
          <SwiperSlide>
            {" "}
            <TourCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TourCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TourCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TourCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TourCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <TourCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default VisitCardComp;
