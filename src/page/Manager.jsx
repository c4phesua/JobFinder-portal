import React from 'react';
import clsx from 'clsx';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import Cvs from "../component/CvGen";
import JobsTableGen from "../component/JobGen";
import { managerStyle } from '../styleutil/ManagerStyle';


export default function Manager() {
    const classes = managerStyle();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* List CV */}
                        <Grid item xs={"auto"} md={"auto"} lg={"auto"}>
                            <Paper className={classes.paper}>
                                <Cvs />
                            </Paper>
                        </Grid>
                        {/* CV */}
                        <Grid item xs={"auto"} md={"auto"} lg={"auto"}>
                            <Paper className={fixedHeightPaper}>
                                <JobsTableGen />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                    </Box>
                </Container>
            </main>
        </div>
    );
}