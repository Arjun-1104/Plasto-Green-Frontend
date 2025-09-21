import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { mainBannerImages } from "../assets/assets";

const MainSlider = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        // navigation={true}
        className="mySwiper mt-16 h-60 sm:h-80 md:h-96 lg:h-[480px]"
      >
        {mainBannerImages.length > 0 ? (
          mainBannerImages.map(({ image }, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={image}
                alt={`slide${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide className="flex items-center justify-center  h-60 text-2xl text-gray-500">
            No slides available.
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
};

export default MainSlider;
