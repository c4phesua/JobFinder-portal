import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStylesJob,getAllRelatedJobs } from '../utils/UtilsFunc';
import MockupData from '../helper/MockupData';
import { useParams } from "react-router-dom";
import CardMedia from '@material-ui/core/CardMedia';
import { cardStyle } from '../styleutil/CardStyle';
import Box from "@material-ui/core/Box";
import RelatedJobs from '../component/RelatedJobs';


export default function CompanyView() {

    let { id } = useParams();
    const jobs = MockupData.data_home_page.JOB_LIST;
    const company = jobs[id];
    const classes = useStylesJob();
    document.title = "JobFinder - " + company.company_name;
    const classesCard = cardStyle();


    const jobRelated = getAllRelatedJobs(jobs, company.company_name);

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper} style={{border: '1px solid lightgray'}}>

                    <Grid container>
                        <Grid item xs={12} md={3} lg={3}>
                            <CardMedia
                                className={classesCard.cover}
                                image={company.image_link}
                                style={{ marginLeft: 'auto', marginRight: 'auto' }}
                            />
                        </Grid>
                        <Grid container item xs={12} md={9} lg={9}>
                            <Grid item xs={12} md={9} lg={9}>
                                <Typography component="h4" variant="h4" className={classes.cardInfo}>
                                    <Box fontWeight="fontWeightBold">
                                        {company.company_name}
                                    </Box>
                                </Typography>
                                <Typography component="div" variant="body" className={classes.cardInfo}>
                                    Địa điểm làm việc: {company.address}
                                </Typography>
                                <Typography component="div" variant="body" className={classes.cardInfo}>
                                        Email: {company.email}
                                </Typography>
                                
                                <Typography component="div" variant="body" className={classes.cardInfo}>
                                        Phone: {company.phone}
                                </Typography>

                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>

                <RelatedJobs jobs={jobRelated} titles={"CÔNG VIỆC"}/>
            
            </main>
        </React.Fragment>

    );
}