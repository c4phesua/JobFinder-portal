import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { cardStyle } from '../styleutil/CardStyle';
import { newTab } from '../utils/Routes';
import Title from "./Title";

const handleJobClick = (job) => {
  console.log(job);
  newTab("/index.html");
}

const Job = (props) => {
  const classes = cardStyle();
  const { job } = props;
  return (
    <Card className={classes.root} onClick={() => { handleJobClick(job) }}>
      <CardMedia
        className={classes.cover}
        image="https://logoeps.com/wp-content/uploads/2011/05/amazon-logo-vector.png"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.cardText}>
            <Title>
              {job.title}
            </Title>
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
