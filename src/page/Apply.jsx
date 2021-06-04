import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';
import {ColorButton, useStylesApply} from '../utils/UtilsFunc';


export default function Checkout() {
  const classes = useStylesApply();
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Apply
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
                        id="fullname"
                        name="fullname"
                        label="Full Name"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        id="email"
                        name="email"
                        label="Your Email"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} >
                    {/* <label htmlFor="upload-photo">
                        <input
                            style={{ display: 'none' }}
                            id="uploadcv"
                            name="uploadcv"
                            type="file"
                        />

                        <Button color="secondary" variant="contained" component="span">
                            Upload CV
                        </Button>
                    </label> */}
                    <label htmlFor="uploadcv">
                        <input
                            style={{ display: 'none' }}
                            id="uploadcv"
                            name="uploadcv"
                            type="file"
                        />

                        <Fab
                            color="secondary"
                            size="small"
                            component="span"
                            aria-label="add"
                            variant="extended"
                        >
                            <AddIcon/> Upload CV
                        </Fab>
                        <br />
                        <br />

                    </label>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        id="about"
                        name="about"
                        label="Something about yourself"
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
                >
                Send CV
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