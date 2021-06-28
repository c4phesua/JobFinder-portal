import {Helmet} from 'react-helmet';
import {Box, Container, Grid} from '@material-ui/core';
import Applicants from "../component/dashboard/Applicants";
import JobList from "../component/dashboard/JobList";
import AccountProfile from "../component/HrProfile";
import AccountProfileDetails from "../component/dashboard/HrProfileDetail";

const Dashboard = () => (
    <>
        <Helmet>
            <title>Dashboard</title>
        </Helmet>
        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3
            }}
        >
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
        </Box>
    </>
);

export default Dashboard;