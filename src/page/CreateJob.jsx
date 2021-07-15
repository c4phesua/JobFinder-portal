import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import SendIcon from '@material-ui/icons/Send';
import {ColorButton, useStylesApply} from '../utils/UtilsFunc';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


export default function CreateJob() {
  const classes = useStylesApply();
  document.title = "Job Finder - Tạo công việc";
  const [employmentType, setEmploymentType] = React.useState('');
  const handleChange = (event) => {
    setEmploymentType(event.target.value);
  };
  const date = new Date();
  date.setTime(date.getTime() + 24 * 3600 * 1000);
  const [selectedDate, setSelectedDate] = React.useState(date);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper} style={{border: '1px solid lightgray',boxShadow:'none'}}>
          <Typography component="h1" variant="h4" align="center">
            Đăng công việc mới
          </Typography>
          {/* <Grid container spacing={4}>
              <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="fullname"
                    name="fullname"
                    label="Full Name"
                    fullWidth
                  />
              </Grid>
          </Grid> */}
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
                        label="Tên vị trí"
                        fullWidth
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
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="simple-select-label">Loại việc làm:</InputLabel>
                        <Select
                        labelId="simple-select-label"
                        id="employmentType"
                        value={employmentType}
                        onChange={handleChange}
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
                    />
                </MuiPickersUtilsProvider>
                </Grid>

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
                    />
                </Grid>
                <Grid item xs={12} sm={4}/>
                <Grid item xs={12} sm={4}>
                <ColorButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                    size="small" 
                    endIcon={<SendIcon/>}
                    href="/hr/management"
                >
                Đăng tuyển
                </ColorButton>
                </Grid>
                
            </Grid>
        </form>
    </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
    
  );
}