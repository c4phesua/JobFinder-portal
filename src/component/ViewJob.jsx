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


export default function ViewJob(props) {
    let {job} = props;
    const classes = useStylesApply();
    document.title = "Job Finder - Chỉnh sửa công việc";
    const [employmentType, setEmploymentType] = React.useState('');
    const handleChange = (event) => {
        setEmploymentType(event.target.value);
    };
    var splitDate = job.duration.split('/')
    const date = new Date(splitDate[2] + '-' + splitDate[1] + '-' + splitDate[0]);
    date.setTime(date.getTime() + 24 * 3600 * 1000);
    const [selectedDate, setSelectedDate] = React.useState(date);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <Paper className={classes.paper} style={{border: '1px solid lightgray', boxShadow: 'none'}}>
            <Typography component="h1" variant="h4" align="center">
                Nội dung
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
                                    label="Tên vị trí"
                                    fullWidth
                                    value={job.title}
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    id="companyName"
                                    name="companyName"
                                    label="Tên công ty"
                                    fullWidth
                                    value={job.company_name}
                                    disabled
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    id="companyAddress"
                                    name="companyAddress"
                                    label="Nơi làm việc"
                                    fullWidth
                                    value={job.company_address}
                                    disabled
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    id="salary"
                                    name="salary"
                                    label="Mức lương"
                                    fullWidth
                                    value={job.salary}
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="simple-select-label">Loại việc làm:</InputLabel>
                                    <Select
                                        labelId="simple-select-label"
                                        id="employmentType"
                                        value={job.type === 'Toàn thời gian' ? 'ft' : 'pt'}
                                        onChange={handleChange}
                                        disabled
                                    >
                                        <MenuItem value="ft">Full-time</MenuItem>
                                        <MenuItem value="pt">Part-tme</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disablePast
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Ngày hết hạn"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        disabled
                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} md={12} lg={12}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    id="description"
                                    name="description"
                                    label="Thông tin về công việc"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={job.description}
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    id="required"
                                    name="required"
                                    label="Yêu cầu"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={job.require}
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    id="benefit"
                                    name="benefit"
                                    label="Quyền lợi"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={job.benefit}
                                    disabled
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