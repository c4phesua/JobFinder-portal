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

const DEFAULT_LOGO = 'https://s3.amazonaws.com/hoorayapp/emp-company/default-company.jpg';

const handleJobClick = (job) => {
  newTab(`/jobs/${job.id_job}`);
}

const renderImageLogo = (image) => {
  return image !== "" ? image : DEFAULT_LOGO;
}

const Job = (props) => {
  const classes = cardStyle();
  const classInfo = useStylesJob()
  const classLink = linkStyle();
  const { job } = props;
  return (
    <Card className={classes.root}>
    <Grid container>
        <Grid item xs={12} md={3} lg={3}>
      <CardMedia
        className={classes.cover}
        image={renderImageLogo(job.image_link)}
        onClick={() => { handleJobClick(job) }}
      />
      </Grid>
      
      <Grid container item xs= {12} md={9} lg={9}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6" className={classInfo.cardInfo} color="primary">
            <Link href='' className={classLink.link}  onClick={() => { handleJobClick(job) }} style={{textDecoration:'none'}}>
            {job.title}
            </Link>
          </Typography>
          <Typography component="div" variant="body" className={classInfo.cardInfo}>
              {job.company_name}
          </Typography>
        </CardContent>
      </Grid>
                
     </Grid> 
    </Card>
  )
}

export default Job;
