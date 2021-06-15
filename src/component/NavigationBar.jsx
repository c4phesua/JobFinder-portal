import React from 'react';
import { currentPath } from '../utils/Routes';
import RouteConstants from '../utils/RouteConstants';
import { InputBase, Select, AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { ColorButton } from "../utils/UtilsFunc";
import { navBarStyle } from '../styleutil/NavigationStyle';
import { hr_user, student_user } from '../helper/MockupData';
import { isLoggedIn, isDashboard, isHRRole, isStudentRole } from '../helper/RoutesHelper';

export default function ButtonAppBar() {
  const classes = navBarStyle();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            className={classes.menuButton}
            variant="h6"
          >
            <a style={{ color: 'white' }} href="/">
              JobFinder
            </a>
          </Typography>
          {isDashboard() &&
            <div style={{ display: 'inline-flex' }}>
              <div className={classes.search}>
                {/*search textbox*/}
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              {/*type selector*/}
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
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
                  <option value={'ALL'}>Tất cả</option>
                  <option value={'part-time'}>Bán thời gian</option>
                  <option value={'full-time'}>Toàn thời gian</option>
                </Select>
              </div>
              <ColorButton variant="contained" color="primary" className={classes.margin}>
                Tìm kiếm
              </ColorButton>
            </div>
          }
          <Typography className={classes.title}> </Typography>
          {!isLoggedIn() && currentPath() !== RouteConstants.SIGNUP && <Button className={classes.titleButton} href={RouteConstants.SIGNUP}>Signup</Button>}
          {!isLoggedIn() && currentPath() !== RouteConstants.LOGIN && <Button className={classes.titleButton} href={RouteConstants.LOGIN}>Login</Button>}
          {isLoggedIn() && isHRRole() && !isStudentRole() && <Button className={classes.titleButton} href={'#'}>{hr_user.fullname}</Button>}
          {isLoggedIn() && isStudentRole() && <Button className={classes.titleButton} href={'#'}>{student_user.fullname}</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
