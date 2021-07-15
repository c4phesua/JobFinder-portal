import React from 'react';
import {
    Avatar,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography
} from '@material-ui/core';
import {loginStyle} from '../styleutil/LoginStyle';
import {currentPath, goTo} from "../utils/Routes";
import RouteConstants from "../utils/RouteConstants";

const {
    DASHBOARD,
    HR_MANAGEMENT,
    HR_LOGIN,
    EMPLOYER
} = RouteConstants;

const onLoginClick = () => {
    if (HR_LOGIN) {
        goTo(HR_MANAGEMENT)
    } else {
        goTo(DASHBOARD);
    }
}

export default function SignIn() {
    const classes = loginStyle();

    document.title = "JobFinder - Đăng nhập";

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Đăng nhập
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                    <Button
                        // type="submit"
                        onClick={onLoginClick}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Đăng nhập
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Quên mật khẩu?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href= {currentPath() === HR_LOGIN ? EMPLOYER :  "/signup"} variant="body2">
                                {"Chưa có tài khoản? Đăng ký ngay"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}