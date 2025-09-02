import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import { mainBannerImages } from '../assets/assets';

const {mainBannerImage1: slide1, mainBannerImage2: slide2, mainBannerImage3: slide3, mainBannerImage4: slide4} = mainBannerImages;
const MainSlider = () => {
  return (
    <>
        <Swiper
        modules={[Pagination, Navigation,Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay= {{
            delay: 2500,
            disableOnInteraction: false, 
            pauseOnMouseEnter: true, 
        }}
        
        navigation={true}
        className="mySwiper mt-16"
      >
        <SwiperSlide><img src={slide1} alt="slide1" className="w-full h-60 object-cover"/></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="slide2" className="w-full h-60 object-cover"/></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="slide3" className="w-full h-60 object-cover"/></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="slide4" className="w-full h-60 object-cover"/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default MainSlider