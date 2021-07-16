import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { cardStyle } from '../styleutil/CardStyle';
import { newTab } from '../utils/Routes';
import {ColorButton,useStylesJob,linkStyle} from '../utils/UtilsFunc';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import Link from '@material-ui/core/Link';

const DEFAULT_LOGO = 'https://s3.amazonaws.com/hoorayapp/emp-company/default-company.jpg';

const handleJobClick = (job) => {
  newTab(`/jobs/${job.id_job}`);
}

const handleMouseOn = (x) => {
    x.style.color="green";
  }

const renderImageLogo = (image) => {
  return image !== "" ? image : DEFAULT_LOGO;
}

const Job = (props) => {
  const classeCard = cardStyle();
  const classes = useStylesJob();
  const classLink = linkStyle();
  const { job } = props;
  return (
    <Card className={classeCard.root} 
        style={{borderLeft:'0',borderRight:'0',width:'90%', 
                marginLeft:'auto',marginRight:'auto',
                paddingTop:'1rem',paddingBottom:'1rem'}}>
        <Grid container>
            <Grid item xs={12} md={2} lg={2}>
                <CardMedia
                    className={classeCard.cover}
                    image={renderImageLogo(job.image_link)}
                    style={{marginLeft:'auto',marginRight:'auto'}}
                />
            </Grid>
            <Grid container item xs= {12} md={4} lg={4}>
                <CardContent className={classeCard.content}>
                    <Typography component="h6" variant="h6" className={classes.cardInfo}  style={{fontWeight:'600',alignContent:'left'}}>
                        <Link href='' className={classLink.link} onClick={() => { handleJobClick(job) }} style={{textDecoration:'none'}}>
                        {job.title}
                        </Link>
                    </Typography>
                    <Typography component="div" variant="body" className={classes.cardInfo}>
                        {job.company_name}
                    </Typography>
                    
                </CardContent>

            </Grid>
            
            <Grid container item xs= {12} md={6} lg={6}>
            <Grid item xs= {12} md={6} lg={6}>
                <CardContent className={classeCard.content}>
                    <Typography component="div" variant="body2" style={{alignContent:'right'}} >
                        <Box fontWeight="fontWeightBold">
                            Ngày ứng tuyển
                        </Box>

                    </Typography>
                    <Typography component="div" variant="body2" >
                        {job.applied}
                    </Typography>
                <hr/>
                    <Typography component="div" variant="body2" style={{alignContent:'left'}} >
                        
                        <Box fontWeight="fontWeightBold">
                            Ngày hết hạn
                        </Box>
                    </Typography>
                    <Typography component="div" variant="body2" >
                        {job.duration}
                    </Typography>
                    
                </CardContent>
                </Grid>
            <Grid item xs= {12} md={6} lg={6}>
            <CardContent className={classeCard.content}>
            <Typography component="div" variant="body2" style={{alignContent:'left'}} >
                        
                        <Box fontWeight="fontWeightBold">
                            Trạng thái
                        </Box>
                    </Typography>
                    {job.status == "seen"?<div className="badge badge-info text_dark" >Đã xem hồ sơ</div>
                    :job.status=="waiting"?<div className="badge badge-warning text_dark" >Đang đợi duyệt</div>
                    :job.status =="success"?<div className="badge badge-success" >Đã được chấp nhận</div>
                    :<div className="badge badge-danger" >Đã bị từ chối</div>}
                    
                    
                    
                    
                    
                </CardContent>
                </Grid>
                
            </Grid>
            
        </Grid> 
    </Card>
  )
}

export default Job;
