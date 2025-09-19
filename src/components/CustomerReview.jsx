// import React from 'react'
// import {Swiper, SwiperSlide} from 'swiper/react'
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';
// import { Pagination, Navigation,Autoplay } from 'swiper/modules';
// import { FaRegStar, FaStar } from 'react-icons/fa6';
// import { customerReviews } from '../data/data';

// const CustomerReview = () => {
//   return (
//     <div className='w-full px-2 py-8 md:py-16 bg-gradient-to-b from-white to-gray-50'>
//          <Swiper
//         modules={[Pagination, Navigation,Autoplay]}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         autoplay= {{
//             delay: 2500,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//         }}
//         navigation={true}
//         slidesPerView={1.1}
//         breakpoints={{
//           640 : {
//             slidesPerView : 1.2
//           },
//           768 : {
//             slidesPerView: 1.4
//           },
//           1024 : {
//             slidesPerView : 1.8
//           },
//           1280 : {
//             slidesPerView : 2
//           }
//         }}
//         spaceBetween={20}
//         className="mySwiper"
//       >
//          {customerReviews.map(({image, review, name, rating},i) => {

//         return <SwiperSlide key={i} className='border p-8 py-16 flex'>
//             <div className='pt-12 px-5 max-w-sm sm:max-w-md pb-5 relative mx-auto flex flex-col items-center space-y-2 bg-white rounded-2xl overflow-visible shadow-lg transition-all duration-300 hover:shadow-xl'>
//                 <div className='rounded-full w-20 h-20  p-1 absolute -top-10 left-1/2 -translate-x-1/2  bg-white'>
//                     <img src={image} alt={name} className="object-cover w-full h-full rounded-full"/>
//                 </div>
//                 <p className='text-gray-600 text-center px-4'>{review}</p>
//                 <h2 className='text-2xl'>{name}</h2>
//                 <span className="flex gap-0.5">
//                 {Array.from({ length: 5 }, (_, i) =>
//                 i < rating ? (
//                     <FaStar key={i} className="text-yellow-400" />
//                 ) : (
//                     <FaRegStar key={i} className='text-gray-300' />
//                 )
//                 )}
//             </span>
//             </div>
//         </SwiperSlide>
//          })}
//       </Swiper>

//     </div>
//   )
// }

// export default CustomerReview

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { customerReviews } from "../data/data";

const CustomerReview = () => {
  return (
    <div className="w-full px-2 py-8 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 1.4 },
          1024: { slidesPerView: 1.8 },
          1280: { slidesPerView: 2 },
        }}
        spaceBetween={20}
        className="mySwiper"
      >
        {customerReviews.map(({ image, review, name, rating }, i) => (
          <SwiperSlide key={i} className=" py-16 flex justify-center">
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg px-6 pt-16 pb-8 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto transition-all duration-300 hover:shadow-xl">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center">
                <img
                  src={image}
                  alt={name}
                  className="object-cover w-22 h-22 rounded-full border-4 border-gray-200"
                />
              </div>
              <p className="text-gray-600 text-center mt-2 mb-4 px-2 text-base md:text-lg">
                {review}
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                {name}
              </h2>
              <span className="flex gap-1 mb-2">
                {Array.from({ length: 5 }, (_, idx) =>
                  idx < rating ? (
                    <FaStar key={idx} className="text-yellow-400" />
                  ) : (
                    <FaRegStar key={idx} className="text-gray-300" />
                  )
                )}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReview;
