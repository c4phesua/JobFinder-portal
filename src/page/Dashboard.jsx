import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import JobsCardGen from "../model/JobsCardGen";
import Title from "../component/Title";

const body = document.body,
    html = document.documentElement;
const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        minHeight: height * 85/100,
        maxHeight: height * 85/100,
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function Manager() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* List jobs */}
                        <Grid item xs={12} md={6} lg={4}>
                            <Paper className={classes.paper}>
                                <JobsCardGen/>
                            </Paper>
                        </Grid>
                        {/* job detail */}
                        <Grid item xs={12} md={6} lg={5}>
                            <Paper className={fixedHeightPaper}>
                                <Title>Job detail</Title>
                            </Paper>
                        </Grid>
                        {/* top company */}
                        <Grid item xs={12} md={6} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <Title>Top company</Title>
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