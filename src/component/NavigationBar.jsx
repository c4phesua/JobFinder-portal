import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {currentPath} from '../utils/Routes';
import RouteConstants from '../utils/RouteConstants';
import {InputBase, Select} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {ColorButton} from "../utils/UtilsFunc";
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
    padding: theme.spacing(1, 20, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
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
    padding: theme.spacing(0, 1),
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
      marginLeft: theme.spacing(0),
      width: 'auto',
    },
  },
  titleButton: {
    backgroundColor: '#3c52b2',
    color: '#fff',
    '&:hover': {
      backgroundColor: fade('#fff', 0.2),
      color: '#FFC300',
    },
  },
  dropbox:{
    padding: theme.spacing(0, 1, 0, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    color: '#000',
  }
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
              <div style={{ display: 'inline-flex' }}>
                <div className={classes.search}>
                  {/*search textbox*/}
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
                {/*city selector*/}
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <LocationOnIcon/>
                  </div>
                  <Select
                      className={classes.dropbox}
                      native
                      defaultValue="ALL"
                      label="Age"
                      inputProps={{
                        name: 'Status',
                        id: 'outlined-age-native-simple',
                      }}
                  >
                    <option value={'ALL'}>All cities</option>
                    <option value={'HCM'}>Ho Chi Minh</option>
                    <option value={'HN'}>Ha Noi</option>
                    <option value={'DN'}>Da Nang</option>
                  </Select>
                </div>
                <ColorButton variant="contained" color="primary" className={classes.margin}>
                  Search
                </ColorButton>
              </div>
            }
            <Typography className={classes.title}> </Typography>
            {currentPath() !== RouteConstants.SIGNUP && <Button className={classes.titleButton} href={RouteConstants.SIGNUP}>Signup</Button>}
            {currentPath() !== RouteConstants.LOGIN && <Button className={classes.titleButton} href={RouteConstants.LOGIN}>Login</Button>}
            
          </Toolbar>
        </AppBar>
      </div>
  );
}
