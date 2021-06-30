import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import { Container, Grid, Paper } from '@material-ui/core';
import Job from './Job';
import Title from './Title'

SwiperCore.use([Pagination]);

function paginate(array, page_size, page_number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

const renderJobSlide = (jobs,New) => {
  const totalSlide = Math.ceil(jobs.length / 6);
  let slides = [];
  for (let i = 0; i < totalSlide; i++) {
    const jobsSlide = paginate(jobs, 6, i + 1);
    const half = Math.ceil(jobsSlide.length / 2);
    const halfOne = jobsSlide.slice(0, half);
    const halfTwo = jobsSlide.slice(-half);
    slides.push(
      <SwiperSlide>
        {
          <>
            <Container maxWidth="lg">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                  {
                    halfOne.map((job, i) => {
                      return (
                          <Job job={job} New={New} colorIndex={i}/>
                      )
                    })
                  }
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  {
                    halfTwo.map((job, i) => {
                      return (
                          <Job job={job} New={New} />
                      )
                    })
                  }
                </Grid>
              </Grid>
            </Container>
          </>
        }
      </SwiperSlide>
    );
  }
  return (
    slides
  );
}

const JobsSwiper = (props) => {
  const { jobs, New, title } = props;
  return (
    <>
      <Title>{title}</Title>
      <Swiper pagination={true} className="mySwiper">
        {renderJobSlide(jobs,New)}
      </Swiper>
    </>
  )
}

export default JobsSwiper;