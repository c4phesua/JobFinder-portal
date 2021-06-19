import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


SwiperCore.use([Pagination]);

const JobsSwiper = (props) => {
  return (
    <>
      <Swiper pagination={true} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}

export default JobsSwiper;