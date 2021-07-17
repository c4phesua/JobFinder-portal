import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { useStylesApply } from '../../utils/UtilsFunc';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { resetWarningCache } from 'prop-types';


export default function AdminViewReport(props) {
  let { report } = props;
  const classes = useStylesApply();
  document.title = "Job Finder - Chỉnh sửa công việc";
  const [employmentType, setEmploymentType] = React.useState('');
  const handleChange = (event) => {
    setEmploymentType(event.target.value);
  };
  return (
    <Paper className={classes.paper} style={{ border: '1px solid lightgray', boxShadow: 'none' }}>
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
                  label="Người dùng"
                  fullWidth
                  value={report.username}
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
                  label="Nội dung"
                  fullWidth
                  value={report.description}
                  disabled
                />
              </Grid>

              <Grid item xs={12}>
                <a target="_blank" href={report.link}>Nơi xảy ra sai phạm</a>
              </Grid>

              <Grid container item xs={12} md={12} lg={12}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="description"
                    name="description"
                    label="Lý do"
                    fullWidth
                    multiline
                    rows={4}
                    value={report.reason}
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
                    label="Ngày báo cáo"
                    fullWidth
                    value={report.date}
                    disabled
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4} />
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    </Paper>

  );
}