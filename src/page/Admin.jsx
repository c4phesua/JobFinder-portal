import {Container, Grid} from '@material-ui/core';
import CompanyProfile from "../component/HrProfile";
import {useStylesJob} from '../utils/UtilsFunc';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import VerticalAdminTabs from "../component/Admin/AdminTab";
import Title from "../component/Title";

export default function AdminManager(){
    const classes = useStylesJob();
    document.title = "JobFinder - Administrator";
    return (
        <>
            {/* <Helmet>
            <title>Dashboard</title>
        </Helmet> */}

            <CssBaseline/>
            <main className={classes.layout}>
                <Paper className={classes.paper} style={{marginBottom:'0.5rem'}}>
                    <Container maxWidth={true}>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                lg={12}
                                sm={12}
                                xs={12}
                            >
                                <Title>Trang Quản Trị</Title>
                            </Grid>
                            {/* <Grid
                        item
                        lg={8}
                        md={6}
                        xs={12}
                    >
                        <AccountProfileDetails />
                    </Grid> */}

                            {/*<Grid*/}
                            {/*    item*/}
                            {/*    lg={6}*/}
                            {/*    md={12}*/}
                            {/*    xl={6}*/}
                            {/*    xs={12}*/}
                            {/*>*/}
                            {/*    <JobList sx={{ height: '100%' }} />*/}
                            {/*</Grid>*/}
                            {/*<Grid*/}
                            {/*    item*/}
                            {/*    lg={6}*/}
                            {/*    md={12}*/}
                            {/*    xl={6}*/}
                            {/*    xs={12}*/}
                            {/*>*/}
                            {/*    <Applicants />*/}
                            {/*</Grid>*/}
                            <Grid
                                item
                                lg={12}
                                md={12}
                                xl={12}
                                xs={12}
                            >
                                <VerticalAdminTabs/>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </main>
        </>
    );
}