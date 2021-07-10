import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { cardStyle } from '../styleutil/CardStyle';
import { newTab } from '../utils/Routes';
import {getDate,useStylesJob,linkStyle} from '../utils/UtilsFunc';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import Link from '@material-ui/core/Link'

const DEFAULT_LOGO = 'https://s3.amazonaws.com/hoorayapp/emp-company/default-company.jpg';

const handleJobClick = (job) => {
  newTab(`/jobs/${job.id_job}`);
}


const renderImageLogo = (image) => {
  return image !== "" ? image : DEFAULT_LOGO;
}

const Job = (props) => {
  const classeCard = cardStyle();
  const classes = useStylesJob();
  const classLink = linkStyle();
  const { job } = props;
  return (
    <Card className={classeCard.root} >
        <Grid container>
            <Grid item xs={12} md={3} lg={3}>
                <CardMedia
                    className={classeCard.cover}
                    image={renderImageLogo(job.image_link)}
                    onClick={() => { handleJobClick(job) }}
                    style={{marginLeft:'auto',marginRight:'auto',marginTop:'18.475px'}}
                />
            </Grid>
            <Grid container item xs= {12} md={9} lg={9}>
                <CardContent className={classeCard.content}>
                    <Typography component="h6" variant="h6" className={classes.cardInfo} style={{fontWeight:'600'}}>
                        {/* <Box fontWeight="fontWeightBold" onMouseEnter={handleMouseOn(this)}> */}
                        <Link className={classLink.link} onClick={() => { handleJobClick(job) }} style={{textDecoration:'none'}}>
                            {job.title}
                            </Link>
                        {/* </Box> */}
                    </Typography>
                    <Typography component="div" variant="body" className={classes.cardInfo}>
                        {job.company_name}
                    </Typography>
                    <Typography component="div" variant="body" style={{color:'orange'}} className={classes.cardInfo}>
                        
                        <Box fontWeight="fontWeightBold">
                        Lương: {job.salary}
                        </Box>
                    </Typography>
                    
                    <Typography component="div" variant="caption" className={classes.cardInfo2}>
                        Hết hạn trong {getDate(job.duration)} ngày
                    </Typography>
                </CardContent>
            </Grid>
                
        </Grid> 
    </Card>
  )
}

export default Job;
