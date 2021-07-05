import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {useStylesApply} from '../utils/UtilsFunc';


export default function CreateHR() {
    const classes = useStylesApply();
    return (
        <Paper className={classes.paper} style={{border: '1px solid lightgray', boxShadow: 'none'}}>
            <Typography component="h1" variant="h4" align="center">
                Tạo nhân viên mới
            </Typography>
            <React.Fragment>
                <form className={classes.form} noValidate>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} md={12} lg={12}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    id="title"
                                    name="title"
                                    label="Họ và tên"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    id="companyName"
                                    name="companyName"
                                    label="Email"
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    id="companyAddress"
                                    name="companyAddress"
                                    label="Số điện thoại"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    id="companyAddress"
                                    name="companyAddress"
                                    label="Mật Khẩu"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    id="companyAddress"
                                    name="companyAddress"
                                    label="Nhập lại mật khẩu"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}/>
                    </Grid>
                </form>
            </React.Fragment>
        </Paper>

    );
}