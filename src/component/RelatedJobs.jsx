import React from 'react';
import MockupData from '../helper/MockupData';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Job from '../component/FullJobCard';
import ScrollToTop from '../component/ScrollToTop';
import JobFilter from '../component/JobFilter';
import Grid from '@material-ui/core/Grid';
import {useStylesJob} from '../utils/UtilsFunc';
import { Box } from '@material-ui/core';
const normalJobs = MockupData.data_home_page.JOB_LIST;
const newJobs = MockupData.data_home_page.NEW_JOB;
const hotJobs = MockupData.data_home_page.HOT_JOB;



const renderJob = (job) => {
  return (
    
    <Job job = { job } />
    
  );
}

const renderFilter = () => {
  return (
    <JobFilter 
     />
  );
}

const RelatedJobs = (props) => {
  const classes = useStylesJob();
  let {jobs} = props

     const half = Math.ceil(jobs.length / 2);
    const halfOne = jobs.slice(0, half);
    const halfTwo = jobs.slice(-half);
  return (
    // <Container maxWidth="lg">
      
      <Paper className={classes.paper} style={{marginBottom:'0.5rem', border: '1px solid lightblue'}}>
      <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>   
            {
            halfOne.map((job) => {
                return renderJob(job);
            })
            }
        </Grid>
        <Grid item xs={12} md={6} lg={6}>   
            {
            halfTwo.map((job) => {
                return renderJob(job);
            })
            }
            
        </Grid>
    </Grid>
      </Paper>


  )
}

export default RelatedJobs;