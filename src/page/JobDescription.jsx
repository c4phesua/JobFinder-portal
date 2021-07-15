import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { ColorButtonSignUp, ColorButton, useStylesJob, getDate, ListString, getRelatedJobs, linkStyle } from '../utils/UtilsFunc';
import MockupData from '../helper/MockupData';
import { useParams } from "react-router-dom";
import CardMedia from '@material-ui/core/CardMedia';
import { cardStyle } from '../styleutil/CardStyle';
import Box from "@material-ui/core/Box";
import ExploreIcon from '@material-ui/icons/ExploreOutlined';
import { WorkOutlineOutlined } from '@material-ui/icons';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@material-ui/core";
import { closeTab } from "../utils/Routes";
import CheckIcon from '@material-ui/icons/Check';
import RelatedJobs from '../component/RelatedJobs';
import { goTo } from '../utils/Routes';



export default function JobDescription({ apply }) {

    let { id } = useParams();
    const jobs = MockupData.data_home_page.JOB_LIST;
    const job = jobs[id];
    const classes = useStylesJob();
    const [submitted, setSubmitted] = React.useState(false);
    const classLink = linkStyle();
    document.title = "JobFinder - " + job.title;
    const classesCard = cardStyle();
    const [open, setOpen] = React.useState(false);
    const [openCancel, setOpenCancel] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        setSubmitted(true);
    };

    const onCancelJobClick = () => {
        setOpenCancel(true);
    }

    const handleConfirm = () =>{  
        setOpenCancel(false);
        setSubmitted(false);
    }

    const handleCancel = () => {
        setOpenCancel(false);
    }

    const onApplyJobClick = () => {
        setOpen(true);
    }

    const jobRelated = getRelatedJobs(jobs, job.company_name);

    const handleCompanyClick = (job) => {
        goTo(`/company/${job.id_job}`);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper} style={{ border: '1px solid lightgray' }}>

                    <Grid container>
                        <Grid item xs={12} md={2} lg={2}>
                            <CardMedia
                                className={classesCard.cover}
                                image={job.image_link}
                                style={{ marginLeft: 'auto', marginRight: 'auto' }}
                            />
                        </Grid>
                        <Grid container item xs={12} md={10} lg={10}>
                            <Grid item xs={12} md={9} lg={9}>
                                <Typography component="h4" variant="h4" className={classes.cardInfo}>
                                    <Box fontWeight="fontWeightBold">
                                        {job.title}
                                    </Box>
                                </Typography>
                                <Typography component="div" variant="body" className={classes.cardInfo}>
                                    <Link className={classLink.link} onClick={() => { handleCompanyClick(job) }} style={{ textDecoration: 'none' }}>
                                        {job.company_name}
                                    </Link>
                                </Typography>
                                <Typography component="div" variant="body" className={classes.cardInfo}>
                                    Địa điểm làm việc: {job.company_address}
                                </Typography>
                                <Typography component="div" variant="body" style={{ color: 'orange' }} className={classes.cardInfo}>

                                    <Box fontWeight="fontWeightBold">
                                        Lương: {job.salary}
                                    </Box>
                                </Typography>

                                <Typography component="div" variant="caption" className={classes.cardInfo}>
                                    Hết hạn trong {getDate(job.duration)} ngày
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3} lg={3}>
                                {!submitted && <ColorButtonSignUp
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submit}
                                    size="large"
                                    style={{ color: "white" }}
                                    onClick={onApplyJobClick}
                                >
                                    Nộp đơn
                                </ColorButtonSignUp>}
                                {submitted && <ColorButton
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submit}
                                    size="large"
                                    style={{ color: "white" }}
                                    onClick={onCancelJobClick}
                                >
                                    Huỷ
                                </ColorButton>}
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>

                <Paper className={classes.paper} style={{ width: '80%', margin: 'auto', border: '1px solid lightgray' }}>
                    <Grid container>
                        <Grid container item xs={12}>
                            <Grid item xs={12} style={{ paddingBottom: '2rem' }}>
                                <Typography variant="h6" align="left">
                                    KIỂU LÀM VIỆC
                                </Typography>
                                <Typography variant="body2" align="left">
                                    <WorkOutlineOutlined /> {job.type}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} style={{ paddingBottom: '2rem' }}>
                                <Typography variant="h6" align="left">
                                    MÔ TẢ CÔNG VIỆC
                                </Typography>
                                <ListString items={job.description} />
                            </Grid>
                            <Grid item xs={12} style={{ paddingBottom: '2rem' }}>
                                <Typography variant="h6" align="left">
                                    QUYÊN LỢI
                                </Typography>
                                <ListString items={job.benefit} />
                            </Grid>
                            <Grid item xs={12} style={{ paddingBottom: '2rem' }}>
                                <Typography variant="h6" align="left">
                                    YÊU CẦU CÔNG VIỆC
                                </Typography>
                                <ListString items={job.require} />
                            </Grid>
                            <Grid item xs={12} style={{ paddingBottom: '2rem' }}>
                                <Typography variant="h6" align="left">
                                    ĐỊA ĐIỂM LÀM VIỆC
                                </Typography>
                                <Typography variant="body2" align="left" >
                                    <ExploreIcon /> {job.company_address}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>

                <RelatedJobs jobs={jobRelated} titles={"CÔNG VIỆC LIÊN QUAN"} />
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Thông báo
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            <CheckIcon />
                            Ứng tuyển thành công, bấm ok để trở về.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog onClose={handleCancel} aria-labelledby="customized-dialog-title" open={openCancel}>
                    <DialogTitle id="customized-dialog-title" onClose={handleCancel}>
                        Thông báo
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            <CheckIcon />
                            Bạn có chắc muốn huỷ công việc đã ứng tuyển?
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleConfirm} color="primary">
                            OK
                        </Button>
                        <Button autoFocus onClick={handleCancel} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </main>
        </React.Fragment>

    );
}