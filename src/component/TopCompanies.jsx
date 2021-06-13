import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Title from "../component/Title";

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
        width: '50%',
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

export default function TopCompanies(props) {
    const classes = useStyles();
    const { companies } = props;
    return (
        <div>
            {companies.map((company) => (
                <Card className={classes.root} >
                    <CardMedia
                        className={classes.cover}
                        image="https://logoeps.com/wp-content/uploads/2011/05/amazon-logo-vector.png"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5" className={classes.cardText}>
                                <Title>
                                    {company.company_name}
                                </Title>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {company.company_address}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            ))}
        </div>
    );
}