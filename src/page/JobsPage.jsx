import React from 'react';
import MockupData from '../helper/MockupData';
import { Container } from '@material-ui/core';
import Job from '../component/Job';
import ScrollToTop from '../component/ScrollToTop';
// import JobFilter from '../component/JobFilter';
const jobs = MockupData.data_home_page.JOB_LIST;

const renderJob = (job) => {
  return (
    <Job job = { job } />
  );
}

// const renderFilter = () => {
//   return (
//     <JobFilter />
//   );
// }

const JobsPage = () => {
  document.title = "JobFinder - Việc làm";

  return (
    <Container maxWidth="lg">
      {/* {
        renderFilter()
      } */}
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