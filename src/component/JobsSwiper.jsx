import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Title from './Title'

SwiperCore.use([Pagination]);

function paginate(array, page_size, page_number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

const renderJobSlide = (jobs) => {
  const totalSlide = jobs.length % 10 + 1;
  let slides = [];
  for (let i = 0; i < totalSlide; i++) {
    const jobsSlide = paginate(jobs, 10, 1);
    slides.push(
      <SwiperSlide>
        {
          jobsSlide.map( (job) => {
            return (
              <h1>{job.company_name}</h1>
            )
          })
        }
      </SwiperSlide>
    );
  }
  return (
    slides
  );
}

const JobsSwiper = (props) => {
  const { jobs, title } = props;
  return (
    <>
      <Title>{title}</Title>
      <Swiper pagination={true} className="mySwiper">
        {renderJobSlide(jobs)}
      </Swiper>
    </>
  )
}

export default JobsSwiper;