import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {ColorButtonSignUp, useStylesJob,getDate, ListString} from '../utils/UtilsFunc';
import MockupData from '../helper/MockupData';
import {useParams} from "react-router-dom";
import CardMedia from '@material-ui/core/CardMedia';
import { cardStyle } from '../styleutil/CardStyle';
import Box from "@material-ui/core/Box";
import ExploreIcon from '@material-ui/icons/ExploreOutlined';
import { WorkOutlineOutlined } from '@material-ui/icons';

export default function CreateJob() {
    
    let {id} = useParams();
    const jobs = MockupData.data_home_page.JOB_LIST;
    const job = jobs[id];
    const classes = useStylesJob();
    document.title = "JobFinder - " + job.title;
    const classesCard = cardStyle();

    return (
        <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
            <Paper className={classes.paper}>
            
            <Grid container>
                <Grid item xs= {12} md={2} lg={2}>
                <CardMedia
                        className={classesCard.cover}
                        image={job.image_link}
                        style={{marginLeft:'auto',marginRight:'auto'}}
                    />
                </Grid>
                <Grid container item xs= {12} md={10} lg={10}>
                        <Grid item xs={12} md={9} lg={9}>
                        <Typography component="h4" variant="h4" className={classes.cardInfo}>
                            <Box fontWeight="fontWeightBold">
                            {job.title}
                            </Box>
                        </Typography>
                        <Typography component="div" variant="body" className={classes.cardInfo}>
                            {job.company_name}
                        </Typography>
                        <Typography component="div" variant="body" className={classes.cardInfo}>
                            Địa điểm làm việc: {job.company_address}
                        </Typography>
                        <Typography component="div" variant="body" style={{color:'orange'}} className={classes.cardInfo}>
                           
                            <Box fontWeight="fontWeightBold">
                            Lương: {job.salary}
                            </Box>
                        </Typography>
                        
                        <Typography component="div" variant="caption" className={classes.cardInfo}>
                            Hết hạn trong {getDate(job.duration)} ngày
                        </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} lg={3}>
                        <ColorButtonSignUp
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                            size="large"
                            style={{color:"white"}} 
                        >
                            Nộp đơn
                        </ColorButtonSignUp>
                        </Grid>
                </Grid>
            </Grid>
            </Paper>
            
            <Paper className={classes.paper} style={{width:'80%', margin:'auto'}}>
                <Grid container>
                    <Grid container item xs={12}>
                        <Grid item xs={12} style={{paddingBottom:'2rem'}}>
                            <Typography  variant="h6" align="left">
                                KIỂU LÀM VIỆC
                            </Typography>
                            <Typography  variant="body2" align="left">
                               <WorkOutlineOutlined/> {job.type}
                            </Typography> 
                        </Grid> 
                        <Grid item xs={12} style={{paddingBottom:'2rem'}}>
                            <Typography  variant="h6" align="left">
                                MÔ TẢ CÔNG VIỆC
                            </Typography>
                            <ListString items={job.description}/>  
                        </Grid>    
                        <Grid item xs={12} style={{paddingBottom:'2rem'}}>
                            <Typography  variant="h6" align="left">
                                QUYÊN LỢI
                            </Typography>
                            <ListString items={job.benefit}/>  
                        </Grid>  
                        <Grid item xs={12} style={{paddingBottom:'2rem'}}>
                            <Typography  variant="h6" align="left">
                                YÊU CẦU CÔNG VIỆC
                            </Typography>
                            <ListString items={job.require}/>  
                        </Grid>
                        <Grid item xs={12} style={{paddingBottom:'2rem'}}>
                            <Typography  variant="h6" align="left">
                                ĐỊA ĐIỂM LÀM VIỆC
                            </Typography>
                            <Typography  variant="body2" align="left" >
                                <ExploreIcon/> {job.company_address}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>  
            </Paper>
        </main>
        </React.Fragment>
        
    );
}