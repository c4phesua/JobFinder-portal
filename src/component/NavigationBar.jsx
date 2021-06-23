import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Link from '@material-ui/core/Link';
import LocationComboBox from "./LocationSearch";
import {Divider, InputBase} from "@material-ui/core";
import JobTypeComboBox from "./JobTypeSearch";
import NotificationsIcon from '@material-ui/icons/Notifications';
import LanguageIcon from '@material-ui/icons/Language';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `0.5px solid ${theme.palette.divider}`,
        position: 'sticky',
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        justifyContent: 'space-between',
        overflowX: 'auto',
        backgroundColor: '#1E88E5',
        color: "white",
        minHeight: 11,
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        color: 'inherit',
        "&:hover": {
            color: "#FFFF66",
            textDecoration: "underline #FFFF66"
        },
    },
    location: {
        width: '9%',
        marginRight: theme.spacing(4),
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    jobTypes: {
        width: '12%',
        marginRight: theme.spacing(5),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        height: "inherit",
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    leftMargin: {
        width: '3%',
    },
    rightMargin: {
        width: '4%'
    },
    button: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(0),
        backgroundColor: '#0277BD',
        color: "white",
        "&:hover": {
            backgroundColor: "#00CCFF",
        },
    },
    searchBar:{
        display: 'inline-flex',
        width:'70%',
        height: '10%',
        backgroundColor: '#ECF0F1',
        borderRadius: 20,
    }
}));

export default function NavigationBar() {
    const classes = useStyles();
    const sections = [
        {title: 'Nhà tuyển dụng', url: '#'},
        {title: 'Việc làm', url: '#'},
        {title: 'Phỏng vấn', url: '#'},
        {title: 'Ngành hot', url: '#'},
        {title: 'Văn hóa', url: '#'},
        {title: 'Mức lương', url: '#'},
        {title: 'Tip tạo CV', url: '#'},
    ];
    const title = 'JobFinder';

    return (
        <React.Fragment>
            <Toolbar component="nav" variant={"dense"} className={classes.toolbarSecondary}>
                {sections.map((section) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="caption"
                        href={section.url}
                        className={classes.toolbarLink}
                    >
                        {section.title}
                    </Link>
                ))}
                <div style={{width: '70%'}}/>
                <IconButton color={"inherit"} size={"small"}>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton color={"inherit"} size={"small"}>
                    <LanguageIcon/>
                </IconButton>
            </Toolbar>
            <Toolbar className={classes.toolbar}>
                <Button size="small">JobFinder</Button>
                <div className={classes.leftMargin}/>
                <div className={classes.searchBar}>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            input: classes.inputInput,
                        }}
                        style={{width: '70%'}}
                        inputProps={{'aria-label': 'search'}}
                    />
                    <div className={classes.jobTypes}>
                        <JobTypeComboBox/>
                    </div>
                    <div style={{width: 3}}/>
                    <div className={classes.location}>
                        <LocationComboBox/>
                    </div>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                </div>
                <div className={classes.rightMargin}/>
                <Button variant="outlined" size="medium" className={classes.button}>
                    Sign-up
                </Button>
                <Button variant="outlined" size="medium" className={classes.button}>
                    Login
                </Button>
            </Toolbar>
        </React.Fragment>
    );
}