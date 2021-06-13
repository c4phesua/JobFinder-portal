import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Title from "../component/Title";

function createData(id, date, name, email, cv, status) {
    return {id, date, name, email, cv, status};
}

const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'test@test.com', 'facebook.com', 'PENDING'),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'test@test.com', 'facebook.com', 'PENDING'),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'test@test.com', 'facebook.com', 'PENDING'),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'test@test.com', 'facebook.com', 'PENDING'),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'test@test.com', 'facebook.com', 'PENDING'),
];

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
        width: '30%',
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

export default function MediaControlCard() {
    const classes = useStyles();

    return (
        <div>
            <Title>Jobs List</Title>
            {rows.map((row) => (
                <Card className={classes.root} onClick={() => {
                    {
                        alert("hello world")
                    }
                }}>
                    <CardMedia
                        className={classes.cover}
                        image="https://logoeps.com/wp-content/uploads/2011/05/amazon-logo-vector.png"
                        title="Live from space album cover"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Live From Space
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Mac Miller
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            ))}
        </div>
    );
}