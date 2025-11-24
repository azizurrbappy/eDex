'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import InstructorSlide from './InstructorSlide';
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';
import useAxios from '@/hooks/useAxios';

const InstructorSlider = () => {
  const [instructors, setInstructors] = useState();
  const axios = useAxios();

  useEffect(() => {
    const fetchInstructors = async () => {
      const res = await axios.get('/instructors');
      setInstructors(res.data);
    };
    fetchInstructors();
  }, []);

  return (
    <>
      {instructors ? (
        <div className="relative px-16">
          <button className="prev-btn p-2.5 bg-gray-100 hover:bg-gradient-to-b from-[#FFC27A] to-[#FFA337] rounded-full cursor-pointer absolute top-20 left-2 hover:text-white">
            <RiArrowLeftSLine></RiArrowLeftSLine>
          </button>

          <button className="next-btn p-2.5 bg-gray-100 hover:bg-gradient-to-b from-[#FFC27A] to-[#FFA337] rounded-full cursor-pointer absolute top-20 right-2 hover:text-white">
            <RiArrowRightSLine></RiArrowRightSLine>
          </button>

          <Swiper
            slidesPerView={4}
            breakpoints={{
              // Mobile (320px and up)
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // Large tablet (768px and up)
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // Desktop (1024px and up)
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            grabCursor={true}
            pagination={{
              clickable: true,
              bulletActiveClass: 'custom-bullet-active',
            }}
            navigation={{
              prevEl: '.prev-btn',
              nextEl: '.next-btn',
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {instructors.map(instructor => (
              <SwiperSlide key={instructor._id}>
                <InstructorSlide instructor={instructor}></InstructorSlide>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="min-h-50 flex items-center justify-center">
          <span className="loading loading-spinner text-[#FFA337]"></span>
        </div>
      )}
    </>
  );
};

export default InstructorSlider;
