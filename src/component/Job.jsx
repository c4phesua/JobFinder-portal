import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { cardStyle } from '../styleutil/CardStyle';
import { newTab } from '../utils/Routes';
import {shortString,linkStyle} from '../utils/UtilsFunc';
import Link from '@material-ui/core/Link'

const DEFAULT_LOGO = 'https://s3.amazonaws.com/hoorayapp/emp-company/default-company.jpg';

const handleJobClick = (job) => {
  newTab(`/jobs/${job.id_job}`);
}

const renderImageLogo = (image) => {
  return image !== "" ? image : DEFAULT_LOGO;
}

const Job = (props) => {
  const classes = cardStyle();
  const classLink = linkStyle();
  const { job } = props;
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={renderImageLogo(job.image_link)}
        onClick={() => { handleJobClick(job) }}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6" className={classes.cardText} color="primary">
            <Link href='' className={classLink.link}  onClick={() => { handleJobClick(job) }} style={{textDecoration:'none'}}>
            {job.title}
            </Link>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {job.company_name}
          </Typography>
        </CardContent>
      </div>
    </Card>
  )
}

export default Job;
