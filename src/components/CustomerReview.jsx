import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { customerReviews } from '../data/data';

const CustomerReview = () => {
  return (
    <div>
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
        className="mySwiper"
      >
         {customerReviews.map(({image, review, name, rating},i) => {

        return <SwiperSlide key={i} className='p-8 py-15 bg-gray-100'>
            <div className='pt-12  pb-5 relative flex flex-col items-center space-y-2 bg-white rounded-3xl overflow-visible shadow-md'>
                <div className='rounded-full w-20 h-20  p-1 absolute -top-10 left-1/2 -translate-x-1/2  bg-white'>
                    <img src={image} alt="slide1" className="object-cover w-full h-full rounded-full"/>
                </div>
                <p className='text-gray-600 text-center px-4'>{review}</p>
                <h2 className='text-2xl'>{name}</h2>
                <span className="flex gap-0.5">
                {Array.from({ length: 5 }, (_, i) =>
                i < rating ? (
                    <FaStar key={i} className="text-yellow-400" />
                ) : (
                    <FaRegStar key={i} className='text-gray-300' />
                )
                )}
            </span>
            </div>
        </SwiperSlide>
         })}
      </Swiper>

    </div>
  )
}

export default CustomerReview