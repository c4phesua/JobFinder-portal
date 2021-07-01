import React from 'react';
import MockupData from '../helper/MockupData';
import { Container } from '@material-ui/core';
import JobsSwiper from '../component/JobsSwiper';
import EditProfileSuggest from '../component/EditProfileSuggest';
import ScrollToTop from '../component/ScrollToTop';
import { Grid } from '@material-ui/core';
const newJobs = MockupData.data_home_page.NEW_JOB;
const hotJobs = MockupData.data_home_page.HOT_JOB;

const Homepage = () => {
  document.title = "JobFinder - Trang chủ";

  return (
    <Container maxWidth="lg">
          <JobsSwiper jobs={newJobs} New={true} title="Công việc mới nhất"/>

        <EditProfileSuggest />

      <JobsSwiper jobs={hotJobs} New={false} title="Công việc gợi ý"/>
      <ScrollToTop />
      </Container>
  )
}

export default Homepage;