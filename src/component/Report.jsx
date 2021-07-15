import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import {useStylesApply} from '../utils/UtilsFunc';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


export default function Report() {
    const classes = useStylesApply();
    return (
        <Paper className={classes.paper} style={{border: '1px solid lightgray', boxShadow: 'none'}}>
            <Typography component="h1" variant="h4" align="center">
                Báo cáo sai phạm
            </Typography>
            <React.Fragment>
                <form className={classes.form} noValidate>
                    <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    id="title"
                                    name="title"
                                    label="Nội dung"
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
                                    label="Lý do"
                                    fullWidth
                                    row={5}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    id="companyAddress"
                                    name="companyAddress"
                                    label="Đường dẫn bài viết"
                                    fullWidth
                                />
                            </Grid>
                        <Grid item xs={12} sm={4}/>
                    </Grid>
                </form>
            </React.Fragment>
        </Paper>

    );
}