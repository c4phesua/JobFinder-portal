import React from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import JobsCardGen from "../component/JobsCardGen";
import MockupData from '../helper/MockupData';
import JobDescription from '../component/JobDescription';
import TopCompanies from '../component/TopCompanies';
import { useState } from 'react';
import { dashBoardStyle } from '../styleutil/DashboardStyle';

const jobs = MockupData.data_home_page.JOB_LIST;
const companies = MockupData.data_home_page.TOP_COMPANY;

export default function Manager() {
    document.title = 'JobFinder - Trang chủ';
    const classes = dashBoardStyle();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [currentJobId, setCurrentJobId] = useState(0);
    const onJobClick = (id) => {
        setCurrentJobId(id);
    }

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* List jobs */}
                        <Grid item xs={12} md={6} lg={4}>
                            <Paper className={classes.paper}>
                                <JobsCardGen jobs={jobs} onJobClick={onJobClick} />
                            </Paper>
                        </Grid>
                        {/* job detail */}
                        <Grid item xs={12} md={6} lg={5}>
                            <Paper className={fixedHeightPaper}>
                                <JobDescription jobIndex={currentJobId} />
                            </Paper>
                        </Grid>
                        {/* top company */}
                        <Grid item xs={12} md={6} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <TopCompanies companies={companies}/>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                    </Box>
                </Container>
            </main>
        </div>
    )
}