import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { cardStyle } from '../styleutil/CardStyle';
import Title from "./Title";

export default function MediaControlCard(props) {
    const classes = cardStyle();
    const { jobs, onJobClick } = props;
    const handleJobClick = (job) => {
        onJobClick(job.id_job);
    }
    return (
        <div>
            {jobs.map((job) => (
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
                                {job.company_address}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            ))}
        </div>
    );
}