import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Link from '@material-ui/core/Link';
import LocationComboBox from "./LocationSearch";
import { InputBase } from "@material-ui/core";
import JobTypeComboBox from "./JobTypeSearch";
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LanguageIcon from '@material-ui/icons/Language';
import { navigationStyles } from '../styleutil/NavigationStyle'
import { currentPath, goTo } from '../utils/Routes';
import RouteConstants from '../utils/RouteConstants';

const {
    ROOT,
    LOGIN,
    SIGNUP,
    JOBS,
    EMPLOYER,
    STUDENT_PROFILE,
    INDEX,
    DASHBOARD,
    HR_PROFILE,
    HR_CREATEJOB,
    HR_MANAGEMENT,
    ADMIN,
    HR_LOGIN
} = RouteConstants;

const onLogoClick = () => {
    if (isHRLoggedin()) {
        goTo(HR_MANAGEMENT)
    }
    if (isAdminLoggedIn()) {
        goTo(ADMIN);
    }
    else {
        goTo(ROOT);
    }
}

const onLoginClick = () => {
    if (currentPath() === EMPLOYER) {
        goTo(HR_LOGIN)
    }
    else {
        goTo(LOGIN);
    }
}

const onProfileClick = () => {
    goTo(STUDENT_PROFILE);
}

const onHrProfileClick = () => {
    goTo(HR_MANAGEMENT);
}

const onSignUpClick = () => {
    if (currentPath() === HR_LOGIN) {
        goTo(EMPLOYER)
    }
    else {
        goTo(SIGNUP);
    }
}

const isStudentLoggedIn = () => {
    return currentPath() === STUDENT_PROFILE
        || currentPath().split('/')[1] === JOBS.split('/')[1]
        || currentPath() === INDEX
        || currentPath() === DASHBOARD;
}

const isHRLoggedin = () => {
    return currentPath() === HR_PROFILE
        || currentPath() === HR_CREATEJOB
        || currentPath() === HR_MANAGEMENT
        || currentPath() === "/profile/1"
        ;
}

const showSearchBar = () => {
    return currentPath() !== LOGIN
        && currentPath() !== SIGNUP
        && currentPath() !== EMPLOYER
        && currentPath() !== HR_PROFILE
        && currentPath() !== HR_CREATEJOB
        && currentPath() !== HR_MANAGEMENT
        && currentPath() !== ADMIN
        && currentPath() !== HR_LOGIN
        && currentPath() !== "/profile/1"
        && (!isStudentLoggedIn()
            || currentPath() === INDEX
            || currentPath() === DASHBOARD);
}

const showLoginBtn = () => {
    return currentPath() !== LOGIN && currentPath() !== ADMIN && !isStudentLoggedIn() && !isHRLoggedin() &&
        currentPath() !== HR_LOGIN;
}

const showSignUpBtn = () => {
    return currentPath() !== SIGNUP && currentPath() !== ADMIN && currentPath() !== EMPLOYER && !isStudentLoggedIn() && !isHRLoggedin();
}

const isHrRegistration = () => {
    return currentPath() === HR_LOGIN || currentPath() === EMPLOYER;
}

const isAdminLoggedIn = () => {
    return currentPath() === ADMIN;
}

export default function NavigationBar() {
    const classes = navigationStyles();
    const sections = isHRLoggedin() ? [
        { title: 'Quản lý công ty', url: HR_MANAGEMENT },
        { title: 'Tạo bài đăng tuyển', url: HR_CREATEJOB },
        { title: '', url: '#' },
        { title: '', url: '#' }
    ] : isAdminLoggedIn() ? null :
        [
            { title: 'Nhà tuyển dụng', url: EMPLOYER },
            { title: !isHrRegistration() ? 'Việc làm' : '', url: JOBS },
            { title: !isHrRegistration() ? 'Ngành hot' : '', url: DASHBOARD },
            { title: '', url: '#' }
        ];
    const title = 'Job Finder';

    return (
        <React.Fragment>
            {sections &&
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
                    <div style={{ width: '70%' }} />
                    {(isStudentLoggedIn() || isHRLoggedin()) && <IconButton color={"inherit"} size={"small"}>
                        <ExitToAppIcon onClick={() => goTo(ROOT)}/>
                    </IconButton>}
                    {!isAdminLoggedIn() &&
                        <IconButton color={"inherit"} size={"small"}>
                            <NotificationsIcon />
                        </IconButton>
                    }
                    {!isAdminLoggedIn() &&
                        <IconButton color={"inherit"} size={"small"}>
                            <LanguageIcon />
                        </IconButton>
                    }
                </Toolbar>
            }
            <Toolbar className={classes.toolbar}>
                <Button size="small" onClick={onLogoClick}>{title}</Button>
                <div className={classes.leftMargin} />
                <div className={classes.searchBar}>
                    {
                        showSearchBar() &&
                        <>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    input: classes.inputInput,
                                }}
                                style={{ width: '75%' }}
                                inputProps={{ 'aria-label': 'search' }}
                                fullWidth={true}
                            />
                            <div className={classes.jobTypes}>
                                <JobTypeComboBox />
                            </div>
                            <div style={{ width: '3%' }} />
                            <div className={classes.location}>
                                <LocationComboBox />
                            </div>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </>
                    }
                </div>
                <div className={classes.rightMargin} />
                {
                    showSignUpBtn() &&
                    <Button variant="outlined" size="medium" className={classes.button} onClick={onSignUpClick}>
                        Đăng ký
                    </Button>
                }
                {
                    showLoginBtn() &&
                    <Button variant="outlined" size="medium" className={classes.button} onClick={onLoginClick}>
                        Đăng nhập
                    </Button>
                }
                {
                    isStudentLoggedIn() &&
                    <Button variant="outlined" size="medium" className={classes.button} onClick={onProfileClick}>
                        Nguyễn Trí Nhân
                    </Button>
                }
                {
                    isHRLoggedin() &&
                    <Button variant="outlined" size="medium" className={classes.button} onClick={onHrProfileClick}>
                        Công ty TNHH Vòng Tròn Đỏ
                    </Button>
                }
            </Toolbar>
        </React.Fragment>
    );
}