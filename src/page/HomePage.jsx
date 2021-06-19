import React from 'react';
import MockupData from '../helper/MockupData';
import { Container } from '@material-ui/core';
import JobsSwiper from '../component/JobsSwiper';
import EditProfileSuggest from '../component/EditProfileSuggest';
const jobs = MockupData.data_home_page.JOB_LIST;

const Homepage = () => {
  document.title = "JobFinder - Trang chủ";

  return (
    <Container maxWidth="lg">
      <JobsSwiper jobs={jobs} title="Công việc mới nhất"/>
      <EditProfileSuggest />
      <JobsSwiper jobs={jobs} title="Công việc gợi ý"/>
    </Container>
  )
}

export default Homepage;