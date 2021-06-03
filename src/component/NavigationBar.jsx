import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { currentPath, Routes } from '../utils/Routes';
import RouteConstants from '../utils/RouteConstants';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography
                className={classes.menuButton}
                variant="h6"
            >
              <a style={{color:'white'}} href="/">
                JobFinder
              </a>
            </Typography>
            <Typography className={classes.title}> </Typography>
            {currentPath() !== RouteConstants.SIGNUP && <Button color="inherit" href="/signup">Signup</Button>}
            {currentPath() !== RouteConstants.LOGIN && <Button color="inherit" href="/login">Login</Button>}
            
          </Toolbar>
        </AppBar>
      </div>
  );
}
