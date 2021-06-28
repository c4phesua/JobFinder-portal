import {Helmet} from 'react-helmet';
import {Box, Container, Grid} from '@material-ui/core';
import Applicants from "../component/dashboard/Applicants";
import JobList from "../component/dashboard/JobList";
import AccountProfile from "../component/HrProfile";
import AccountProfileDetails from "../component/dashboard/HrProfileDetail";
import {useStylesJob} from '../utils/UtilsFunc';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Manager(){
const classs = useStylesJob();
return (
    <>
        {/* <Helmet>
            <title>Dashboard</title>
        </Helmet> */}
        
                <CssBaseline/>
                <main className={classs.layout}>
                <Paper className={classs.paper} style={{marginBottom:'0.5rem'}}>
            <Container maxWidth={false}>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        lg={4}
                        sm={6}
                        xs={12}
                    >
                        <AccountProfile/>
                    </Grid>
                    <Grid
                        item
                        lg={8}
                        md={6}
                        xs={12}
                    >
                        <AccountProfileDetails />
                    </Grid>

                    <Grid
                        item
                        lg={6}
                        md={6}
                        xl={3}
                        xs={12}
                    >
                        <JobList sx={{ height: '100%' }} />
                    </Grid>
                    <Grid
                        item
                        lg={6}
                        md={12}
                        xl={9}
                        xs={12}
                    >
                        <Applicants />
                    </Grid>
                </Grid>
            </Container>
        </Paper>
        </main>
    </>
);
    }