import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { cardStyle } from '../styleutil/CardStyle';
import { newTab } from '../utils/Routes';
import {useStylesJob,linkStyle,} from '../utils/UtilsFunc';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';

const DEFAULT_LOGO = 'https://s3.amazonaws.com/hoorayapp/emp-company/default-company.jpg';

const handleJobClick = (job) => {
  newTab(`/jobs/${job.id_job}`);
}

const renderImageLogo = (image) => {
  return image !== "" ? image : DEFAULT_LOGO;
}

const NewLable = () => (
    <Box 
      component='span' color='white' 
      borderRadius='3px' fontSize='12px' 
      fontWeight='bold' textAlign='center'
      lineHeight='15px' style={{backgroundColor:'#FF5661',paddingLeft:'0.6em', paddingRight:'0.6em'}}> MỚI</Box>
);

const Job = (props) => {
  const classes = cardStyle();
  const classInfo = useStylesJob()
  const classLink = linkStyle();
  const { job ,New ,colorIndex} = props;

 

  let styleCard = {
    
  }
  return (
    <Card className={classes.root} style={styleCard}>
    <Grid container>
        <Grid item xs={12} md={2} lg={2}>
      <CardMedia
        className={classes.cover}
        image={renderImageLogo(job.image_link)}
        onClick={() => { handleJobClick(job) }}
      />
      </Grid>
      
      <Grid container item xs= {12} md={8} lg={8}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6" className={classInfo.cardInfo} color="primary">
            <Link className={classLink.link}  onClick={() => { handleJobClick(job) }} style={{textDecoration:'none'}}>
            {job.title}
            </Link>
          </Typography>
          <Typography component="div" variant="body" className={classInfo.cardInfo}>
              {job.company_name}
          </Typography>
        </CardContent>
      </Grid>
      <Grid item xs={12} md={2} lg={2}>
        {New ? <NewLable/> : null}
      </Grid>
                
     </Grid> 
    </Card>
  )
}

export default Job;
