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
import {useParams} from "react-router-dom";
import MockupData, {student_user} from '../helper/MockupData';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import {DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import {goTo} from "../utils/Routes";

export default function Apply() {
    const classes = useStylesApply();
    document.title = "Ứng tuyển";
    let {id} = useParams();
    const jobs = MockupData.data_home_page.JOB_LIST;
    const job = jobs[id];
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        goTo('/dashboard')
    };
    const handleClickOpen = () => {
        setOpen(true);
    }
    return (
        <React.Fragment>
            <CssBaseline/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Ứng tuyển vị trí {job.title} tại {job.company_name}
                    </Typography>
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
                                        label="Họ tên đầy đủ"
                                        defaultValue={student_user.fullname}
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
                                        label="Email của bạn"
                                        defaultValue={student_user.username}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
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
                                            style={{display: 'none'}}
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
                                            <AddIcon/> Chọn CV ứng tuyển
                                        </Fab>
                                        <br/>
                                        <br/>

                                    </label>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        id="about"
                                        name="about"
                                        label="Giới thiệu thêm về bản thân ?"
                                        fullWidth
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}/>
                                <Grid item xs={12} sm={4}>
                                    <ColorButton
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                        className={classes.submit}
                                        size="small"
                                        endIcon={<SendIcon/>}
                                        onClick={handleClickOpen}
                                    >
                                        Gửi CV
                                    </ColorButton>
                                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                                        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                                            Thông báo
                                        </DialogTitle>
                                        <DialogContent dividers>
                                            <Typography gutterBottom>
                                                <CheckIcon/>
                                                Gửi CV thành công, bấm ok để về trang chủ
                                            </Typography>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button autoFocus onClick={handleClose} color="primary">
                                                OK
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </Grid>

                            </Grid>
                        </form>
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>

    );
}