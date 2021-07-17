import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { ColorButton, useStylesJob, getDate, ListString, linkStyle } from '../../utils/UtilsFunc';
import MockupData from '../../helper/MockupData';
import CardMedia from '@material-ui/core/CardMedia';
import { cardStyle } from '../../styleutil/CardStyle';
import Box from "@material-ui/core/Box";
import ExploreIcon from '@material-ui/icons/ExploreOutlined';
import { WorkOutlineOutlined } from '@material-ui/icons';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Chip } from "@material-ui/core";



export default function JobDescription(props) {

  const { report } = props;
  const job = MockupData.data_home_page.JOB_LIST[report.job_id];
  const classes = useStylesJob();
  const classLink = linkStyle();
  const classesCard = cardStyle();

  const renderStatus = (status) => {
    if (status === 0) {
      return (
        <Chip className="yellow-chip" label="Chưa xử lý" />
      )
    }
    if (status === 1) {
      return (
        <Chip className="green-chip" label="Đã bỏ qua" />
      )
    }
    return (
      <Chip className="red-chip" label="Đã gỡ bài viết" />
    );
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Typography component="h1" variant="h4" align="center">
          Nội dung
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={1}>
            <Grid container item xs={12} md={12} lg={12}>
              <Grid item xs={12}>
                <div>
                  <p>
                    <b>Người dùng: </b> {report.username}
                  </p>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>
                  <p>
                    <b>Nội dung: </b> {report.reason}
                  </p>
                </div>
              </Grid>

              <Grid container item xs={12} md={12} lg={12}>
                <Grid item xs={12}>
                  <div>
                    <p>
                      <b>Ngày báo cáo: </b> {report.date}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12}>
                <div>
                  <p>
                    <b>Trạng thái: </b> {renderStatus(report.status)}
                  </p>
                </div>
              </Grid>
              </Grid>
              <Grid item xs={12} sm={4} />
            </Grid>
          </Grid>
        </form>
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
                  <Link className={classLink.link} style={{ textDecoration: 'none' }}>
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
      </main>
    </React.Fragment>

  );
}