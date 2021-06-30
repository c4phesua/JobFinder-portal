import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { cardStyle } from '../styleutil/CardStyle';
import { newTab } from '../utils/Routes';
import {shortString,getDate,useStylesJob,linkStyle} from '../utils/UtilsFunc';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import Link from '@material-ui/core/Link'

const DEFAULT_LOGO = 'https://s3.amazonaws.com/hoorayapp/emp-company/default-company.jpg';

const handleJobClick = (job) => {
  newTab(`/jobs/${job.id_job}`);
}

const handleMouseOn = (x) => {
    console.log('aaa');
    x.style.color="green";
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
    <Card className={classeCard.root} 
        style={{borderLeft:'0',borderRight:'0',width:'90%', 
                marginLeft:'auto',marginRight:'auto',
                paddingTop:'1rem',paddingBottom:'1rem'}}>
        <Grid container>
            <Grid item xs={12} md={3} lg={3}>
                <CardMedia
                    className={classeCard.cover}
                    image={renderImageLogo(job.image_link)}
                    style={{marginLeft:'auto',marginRight:'auto'}}
                />
            </Grid>
            <Grid container item xs= {12} md={6} lg={6}>
                <CardContent className={classeCard.content}>
                    <Typography component="h6" variant="h6" className={classes.cardInfo}  style={{fontWeight:'600'}}>
                        <Link href='' className={classLink.link} onClick={() => { handleJobClick(job) }} style={{textDecoration:'none'}}>
                        {job.title}
                        </Link>
                    </Typography>
                    <Typography component="div" variant="body" className={classes.cardInfo}>
                        {job.company_name}
                    </Typography>
                    
                </CardContent>

            </Grid>
            
            <Grid container item xs= {12} md={3} lg={3}>
                
            <CardContent className={classeCard.content}>
                    <Typography component="div" variant="body" style={{alignContent:'center'}} >
                        Đã ứng tuyển
                    </Typography>
                    <Typography component="div" variant="body" >
                        {job.applied}
                    </Typography>
                </CardContent>
            </Grid>
                
        </Grid> 
    </Card>
  )
}

export default Job;
