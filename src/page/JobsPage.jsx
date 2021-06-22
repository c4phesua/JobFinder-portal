import React from 'react';
import MockupData from '../helper/MockupData';
import { Container } from '@material-ui/core';
import Job from '../component/Job';
import ScrollToTop from '../component/ScrollToTop';
import JobFilter from '../component/JobFilter';
const normalJobs = MockupData.data_home_page.JOB_LIST;
const newJobs = MockupData.data_home_page.NEW_JOB;
const hotJobs = MockupData.data_home_page.HOT_JOB;

const jobs = normalJobs.concat(newJobs).concat(hotJobs);

const renderJob = (job) => {
  return (
    <Job job = { job } />
  );
}

const renderFilter = () => {
  return (
    <JobFilter />
  );
}

const JobsPage = () => {
  document.title = "JobFinder - Việc làm";

  return (
    <Container maxWidth="lg">
      {
        renderFilter()
      }
      {
        jobs.map((job) => {
          return renderJob(job);
        })
      }
      <ScrollToTop />
    </Container>
  )
}

export default JobsPage;