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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid item xs={12} md={8} lg={8} style={{marginLeft:'3em'}}>
          <JobsSwiper jobs={newJobs} New={true} title="Công việc mới nhất"/>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{marginLeft:'5em',marginRight:'5em'}}>
        <EditProfileSuggest />
        </Grid>
        
      <Grid item xs={12}>
        <Grid item xs={12} md={8} lg={8} style={{marginLeft:'3em'}}>
      <JobsSwiper jobs={hotJobs} New={false} title="Công việc gợi ý"/>
      </Grid>
      </Grid>
      <ScrollToTop />
    </Grid>
  )
}

export default Homepage;