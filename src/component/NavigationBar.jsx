import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {currentPath} from '../utils/Routes';
import RouteConstants from '../utils/RouteConstants';
import {InputBase} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

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
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
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
            {currentPath() !== RouteConstants.SIGNUP && currentPath() !== RouteConstants.LOGIN &&
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon/>
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{'aria-label': 'search'}}
                />
              </div>
            }
            <Typography className={classes.title}> </Typography>
            {currentPath() !== RouteConstants.SIGNUP && <Button color="inherit" href={RouteConstants.SIGNUP}>Signup</Button>}
            {currentPath() !== RouteConstants.LOGIN && <Button color="inherit" href={RouteConstants.LOGIN}>Login</Button>}
            
          </Toolbar>
        </AppBar>
      </div>
  );
}
