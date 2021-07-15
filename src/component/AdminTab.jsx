import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Grid } from "@material-ui/core";
import AdminManageJobs from "./AdminManageJobs";
import Activity from "./ActivityTrack";
import UserManager from "./UserManager";
import AdminReportMng from './AdminReportMng';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 'auto',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalAdminTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Grid
                item
                lg={2}
                md={2}
                xl={2}
                xs={2}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Tab label="Xem báo cáo" {...a11yProps(0)} />
                    <Tab label="Quản Lý Bài đăng" {...a11yProps(1)} />
                    <Tab label="Quản Lý Tài Khoản" {...a11yProps(2)} />
                    <Tab label="Quản Lý Hoạt Động" {...a11yProps(3)} />

                </Tabs>
            </Grid>
            <Grid
                item
                lg={10}
                md={10}
                xl={10}
                xs={10}
            >
                <TabPanel value={value} index={0}>
                    <AdminReportMng />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <AdminManageJobs />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <UserManager />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Activity />
                </TabPanel>
            </Grid>
        </div>
    );
}