import React from 'react';
import MockupData from '../helper/MockupData';
import { Container } from '@material-ui/core';
import Job from '../component/Job';
const jobs = MockupData.data_home_page.JOB_LIST;

const renderJob = (job) => {
  return (
    <Job job = { job } />
  );
}

const JobsPage = () => {
  document.title = "JobFinder - Việc làm";

  return (
    <Container maxWidth="lg">
      {
        jobs.map((job) => {
          return renderJob(job);
        })
      }
    </Container>
  )
}

export default JobsPage;