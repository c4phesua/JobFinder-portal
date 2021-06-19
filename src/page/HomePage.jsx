import React from 'react';
import { dashBoardStyle } from '../styleutil/DashboardStyle';
import MockupData from '../helper/MockupData';
import { Container } from '@material-ui/core';
import JobsSwiper from '../component/JobsSwiper';
const jobs = MockupData.data_home_page.JOB_LIST;

const Homepage = () => {

  return (
    <Container maxWidth="lg">
      <JobsSwiper />
    </Container>
  )
}

export default Homepage;