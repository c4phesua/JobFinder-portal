import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {ColorButtonSignUp, useStylesHrSignUp} from '../utils/UtilsFunc';
import BusinessIcon from '@material-ui/icons/Business';
import PersonSharp from '@material-ui/icons/PersonSharp';
import Box from "@material-ui/core/Box";
import RouteConstants from "../utils/RouteConstants";
import {goTo} from "../utils/Routes";

const {
    HR_LOGIN
} = RouteConstants;

const onSignupClick = () => {
    goTo(HR_LOGIN)
}

export default function Apply() {
    const classes = useStylesHrSignUp();
    document.title = "JobFinder - Trở thành nhà tuyển dụng";
    return (
        <React.Fragment>
            <CssBaseline/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <React.Fragment>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={1} >
                                <Grid item xs={12} sm={12}>
                                <Typography component="div" variant="h4" align="center" color="primary">
                                        <Box fontWeight="fontWeightBold">
                                        ĐĂNG KÝ</Box>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography component="h6" variant="h6" align="center">
                                        <Box fontWeight="fontWeightBold">
                                        <PersonSharp style={{fontSize: 30, align: "center", marginBottom: "0.5rem"}}/>Tài khoản
                                        </Box>
                                    </Typography>
                                    <Grid item xs={12} >
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            id="fullname"
                                            name="fullname"
                                            label="Họ tên đầy đủ"
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            id="email"
                                            name="email"
                                            label="Email của bạn"
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Mật khẩu"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="rePassword"
                                            label="Nhập lại mật khẩu"
                                            type="password"
                                            id="rePassword"
                                            autoComplete="current-password"
                                            size="small"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography component="h6" variant="h6" align="center" >
                                    
                                    <Box fontWeight="fontWeightBold">
                                        
                                    <BusinessIcon style={{fontSize: 30, align: "center", marginBottom: "0.5rem"}}/> 
                                    Công ty</Box>
                                    </Typography>
                                    <Grid item xs={12} >
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            id="company_name"
                                            name="company_name"
                                            label="Tên công ty"
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            id="company_name"
                                            name="company_name"
                                            label="Địa chỉ"
                                            fullWidth
                                            size="small"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            id="about_company"
                                            name="about_company"
                                            label="Giới thiệu công ty ?"
                                            fullWidth
                                            multiline
                                            rows={5}
                                            size="small"
                                            inputProps = {{ style: { height: '83px'}}}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={4}/>
                                <Grid item xs={12} sm={4}>
                                    <ColorButtonSignUp
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                        className={classes.submit}
                                        size="small"
                                        onClick={onSignupClick}
                                    >
                                        Đăng ký
                                    </ColorButtonSignUp>
                                </Grid>

                            </Grid>
                        </form>
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>

    );
}