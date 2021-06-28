import {makeStyles} from "@material-ui/core/styles";

export const navigationStyles = makeStyles((theme) => ({
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
        paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        height: "inherit",
        [theme.breakpoints.up('md')]: {
            width: '100%',
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
        maxWidth:'70%',
        height: '10%',
        backgroundColor: '#ECF0F1',
        borderRadius: 20,
    }
}));