import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Title from "./Title";

const body = document.body,
    html = document.documentElement;
const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginBottom: '15px',
        backgroundColor: '#f0f2f5',
        '&:hover': {
            backgroundColor: '#FFFFCC',
        }
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        margin: 'auto',
        minWidth: 90 * height/720,
        minHeight: 90 * height/720,
        maxWidth: 90 * height/720,
        maxHeight: 90 * height/720,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MediaControlCard(props) {
    const classes = useStyles();
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